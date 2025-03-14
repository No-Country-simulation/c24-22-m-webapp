import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged, updateProfile, sendPasswordResetEmail } from 'firebase/auth'; // Añadimos sendPasswordResetEmail
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { auth, db } from '../firebase';

const Profile = () => {
  const [user, setUser] = useState(null);
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeTab, setActiveTab] = useState('profile');
  const [isEditing, setIsEditing] = useState(false);
  const [editData, setEditData] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        try {
          const userDocRef = doc(db, 'users', currentUser.uid);
          const userDocSnap = await getDoc(userDocRef);
          if (userDocSnap.exists()) {
            const data = userDocSnap.data();
            setUserData(data);
            setEditData({
              firstName: data.firstName || '',
              lastName: data.lastName || '',
              phone: data.phone || '',
              photoURL: currentUser.photoURL || '',
              displayName: currentUser.displayName || '',
            });
          } else {
            setUserData({});
            setEditData({
              firstName: '',
              lastName: '',
              phone: '',
              photoURL: currentUser.photoURL || '',
              displayName: currentUser.displayName || '',
            });
          }
        } catch (err) {
          console.error('Error al obtener datos de Firestore:', err);
          setError('Error al cargar los datos del perfil: ' + err.message);
        }
      } else {
        navigate('/login');
      }
      setLoading(false);
    });
    return () => unsubscribe();
  }, [navigate]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditData({ ...editData, [name]: value });
  };

  const handleSave = async () => {
    try {
      const currentUser = auth.currentUser;
      if (!currentUser) throw new Error('Usuario no autenticado');

      // Actualizar datos en Firebase Authentication
      await updateProfile(currentUser, {
        displayName: editData.displayName,
        photoURL: editData.photoURL,
      });

      // Actualizar datos en Firestore
      const userDocRef = doc(db, 'users', currentUser.uid);
      await updateDoc(userDocRef, {
        firstName: editData.firstName,
        lastName: editData.lastName,
        phone: editData.phone,
      });

      // Actualizar estado local
      setUserData({
        ...userData,
        firstName: editData.firstName,
        lastName: editData.lastName,
        phone: editData.phone,
      });
      setUser({ ...currentUser, displayName: editData.displayName, photoURL: editData.photoURL });
      setIsEditing(false);
      setError(null);
    } catch (err) {
      setError('Error al guardar los datos: ' + err.message);
    }
  };

  const handlePreferenceChange = async (key, value) => {
    try {
      const userDocRef = doc(db, 'users', user.uid);
      await updateDoc(userDocRef, { [key]: value });
      setUserData({ ...userData, [key]: value });
    } catch (err) {
      setError('Error al actualizar las preferencias: ' + err.message);
    }
  };

  const handleResetPassword = async () => {
    try {
      if (!user?.email) throw new Error('No se encontró el correo electrónico del usuario.');
      await sendPasswordResetEmail(auth, user.email);
      alert('Se ha enviado un correo para restablecer tu contraseña. Revisa tu bandeja de entrada.');
    } catch (err) {
      setError('Error al enviar el correo de restablecimiento: ' + err.message);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
        <div className="animate-pulse flex flex-col items-center">
          <div className="w-24 h-24 bg-gray-300 dark:bg-gray-700 rounded-full mb-4"></div>
          <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-32 mb-3"></div>
          <div className="h-3 bg-gray-300 dark:bg-gray-700 rounded w-24"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 flex flex-col">
      {/* Header */}
      <header className="bg-white dark:bg-gray-800 shadow p-4 md:p-6 sticky top-0 z-10">
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-bold text-green-600">Guau & Miau</h1>
          <button className="focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600 dark:text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow overflow-y-auto p-4 md:p-6">
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl w-full max-w-4xl overflow-hidden">
          {user && (
            <div className="flex flex-col md:flex-row">
              {/* Sidebar */}
              <div className="md:w-1/3 bg-indigo-600 dark:bg-indigo-800 text-white p-6">
                <div className="flex flex-col items-center mb-8">
                  <div className="relative">
                    <img
                      src={editData.photoURL || 'https://via.placeholder.com/150'}
                      alt="Foto de perfil"
                      className="w-24 h-24 rounded-full object-cover border-4 border-white dark:border-gray-700"
                    />
                    <div className="absolute bottom-0 right-0 bg-green-500 rounded-full w-4 h-4 border-2 border-white dark:border-gray-700"></div>
                  </div>
                  <h2 className="text-xl font-bold mt-4">
                    {editData.displayName || userData?.firstName || 'Usuario'}
                  </h2>
                  <p className="text-indigo-200 dark:text-indigo-300 text-sm">
                    {user.email}
                  </p>
                  {userData?.createdAt && (
                    <p className="text-xs text-indigo-200 dark:text-indigo-300 mt-1">
                      Miembro desde {new Date(userData.createdAt.seconds * 1000).toLocaleDateString()}
                    </p>
                  )}
                </div>
                {/* Navigation Tabs */}
                <nav className="space-y-2">
                  <button
                    onClick={() => setActiveTab('profile')}
                    className={`w-full text-left px-4 py-3 rounded-lg transition-colors flex items-center ${
                      activeTab === 'profile'
                        ? 'bg-white/20 font-medium'
                        : 'hover:bg-white/10'
                    }`}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    Información Personal
                  </button>
                  <button
                    onClick={() => setActiveTab('preferences')}
                    className={`w-full text-left px-4 py-3 rounded-lg transition-colors flex items-center ${
                      activeTab === 'preferences'
                        ? 'bg-white/20 font-medium'
                        : 'hover:bg-white/10'
                    }`}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    Preferencias
                  </button>
                  <button
                    onClick={() => setActiveTab('security')}
                    className={`w-full text-left px-4 py-3 rounded-lg transition-colors flex items-center ${
                      activeTab === 'security'
                        ? 'bg-white/20 font-medium'
                        : 'hover:bg-white/10'
                    }`}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                    Seguridad
                  </button>
                </nav>
                <div className="mt-auto pt-6">
                  <button
                    onClick={() => auth.signOut()}
                    className="w-full bg-white/10 hover:bg-white/20 text-white py-2 px-4 rounded-lg font-medium transition-colors flex items-center justify-center"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                    </svg>
                    Cerrar sesión
                  </button>
                </div>
              </div>
              {/* Main Content */}
              <div className="md:w-2/3 p-6">
                {error && (
                  <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-6" role="alert">
                    <p>{error}</p>
                  </div>
                )}
                {activeTab === 'profile' && (
                  <>
                    <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-indigo-600 dark:text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                      Información Personal
                    </h3>
                    {isEditing ? (
                      <form onSubmit={(e) => { e.preventDefault(); handleSave(); }} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <label className="block text-sm font-medium text-gray-600 dark:text-gray-300 mb-1">
                              Nombre
                            </label>
                            <input
                              type="text"
                              name="firstName"
                              value={editData.firstName}
                              onChange={handleInputChange}
                              className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-transparent focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                              required
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-600 dark:text-gray-300 mb-1">
                              Apellido
                            </label>
                            <input
                              type="text"
                              name="lastName"
                              value={editData.lastName}
                              onChange={handleInputChange}
                              className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-transparent focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                              required
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-600 dark:text-gray-300 mb-1">
                              Correo electrónico
                            </label>
                            <input
                              type="email"
                              value={userData?.email || user.email}
                              className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400 cursor-not-allowed"
                              disabled
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-600 dark:text-gray-300 mb-1">
                              Teléfono
                            </label>
                            <input
                              type="tel"
                              name="phone"
                              value={editData.phone}
                              onChange={handleInputChange}
                              className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-transparent focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-600 dark:text-gray-300 mb-1">
                              Nombre de visualización
                            </label>
                            <input
                              type="text"
                              name="displayName"
                              value={editData.displayName}
                              onChange={handleInputChange}
                              className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-transparent focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-600 dark:text-gray-300 mb-1">
                              URL de foto de perfil
                            </label>
                            <input
                              type="text"
                              name="photoURL"
                              value={editData.photoURL}
                              onChange={handleInputChange}
                              className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-transparent focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                              placeholder="https://example.com/foto.jpg"
                            />
                          </div>
                        </div>
                        <div className="flex justify-end gap-4">
                          <button
                            type="submit"
                            className="bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded-lg font-medium transition-colors"
                          >
                            Guardar
                          </button>
                          <button
                            type="button"
                            onClick={() => setIsEditing(false)}
                            className="bg-gray-400 hover:bg-gray-500 text-white py-2 px-4 rounded-lg font-medium transition-colors"
                          >
                            Cancelar
                          </button>
                        </div>
                      </form>
                    ) : (
                      <div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                            <label className="block text-sm font-medium text-gray-600 dark:text-gray-300 mb-1">Nombre</label>
                            <p className="font-semibold text-gray-800 dark:text-white">
                              {userData?.firstName || 'No especificado'}
                            </p>
                          </div>
                          <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                            <label className="block text-sm font-medium text-gray-600 dark:text-gray-300 mb-1">Apellido</label>
                            <p className="font-semibold text-gray-800 dark:text-white">
                              {userData?.lastName || 'No especificado'}
                            </p>
                          </div>
                          <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                            <label className="block text-sm font-medium text-gray-600 dark:text-gray-300 mb-1">Correo electrónico</label>
                            <p className="font-semibold text-gray-800 dark:text-white">
                              {userData?.email || user.email}
                            </p>
                          </div>
                          <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                            <label className="block text-sm font-medium text-gray-600 dark:text-gray-300 mb-1">Teléfono</label>
                            <p className="font-semibold text-gray-800 dark:text-white">
                              {userData?.phone || 'No especificado'}
                            </p>
                          </div>
                        </div>
                        <div className="mt-6 flex justify-end">
                          <button
                            onClick={() => setIsEditing(true)}
                            className="bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded-lg font-medium transition-colors"
                          >
                            Editar información
                          </button>
                        </div>
                      </div>
                    )}
                  </>
                )}
                {activeTab === 'preferences' && (
                  <>
                    <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-indigo-600 dark:text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      Preferencias
                    </h3>
                    <div className="space-y-6">
                      <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                        <div>
                          <h4 className="font-medium text-gray-800 dark:text-gray-200">Notificaciones por correo</h4>
                          <p className="text-sm text-gray-600 dark:text-gray-400">Recibe notificaciones sobre actualizaciones importantes.</p>
                        </div>
                        <div>
                          <input
                            type="checkbox"
                            className="toggle-checkbox"
                            checked={userData?.emailNotifications || false}
                            onChange={(e) => handlePreferenceChange('emailNotifications', e.target.checked)}
                          />
                        </div>
                      </div>
                      <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                        <div>
                          <h4 className="font-medium text-gray-800 dark:text-gray-200">Modo oscuro</h4>
                          <p className="text-sm text-gray-600 dark:text-gray-400">Activa el modo oscuro para una experiencia visual más cómoda.</p>
                        </div>
                        <div>
                          <input
                            type="checkbox"
                            className="toggle-checkbox"
                            checked={userData?.darkMode || false}
                            onChange={(e) => handlePreferenceChange('darkMode', e.target.checked)}
                          />
                        </div>
                      </div>
                    </div>
                  </>
                )}
                {activeTab === 'security' && (
                  <>
                    <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-indigo-600 dark:text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                      Seguridad
                    </h3>
                    <div className="space-y-6">
                      <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                        <div>
                          <h4 className="font-medium text-gray-800 dark:text-gray-200">Restablecer contraseña</h4>
                          <p className="text-sm text-gray-600 dark:text-gray-400">Recibirás un correo con instrucciones para restablecer tu contraseña.</p>
                        </div>
                        <div>
                          <button
                            onClick={handleResetPassword}
                            className="bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded-lg font-medium transition-colors"
                          >
                            Restablecer
                          </button>
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Profile;