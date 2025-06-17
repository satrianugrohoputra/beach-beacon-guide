
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Umbrella, Eye, EyeOff, Loader2 } from 'lucide-react';
import Header from '@/components/Header';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [authError, setAuthError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear errors when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
    if (authError) {
      setAuthError('');
    }
  };

  const validateField = (name, value) => {
    switch (name) {
      case 'email':
        if (!value) return 'Email is required';
        if (!/\S+@\S+\.\S+/.test(value)) return 'Invalid email format';
        return '';
      case 'password':
        if (!value) return 'Password is required';
        if (value.length < 8) return 'Password must be at least 8 characters';
        return '';
      default:
        return '';
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    const error = validateField(name, value);
    setErrors(prev => ({ ...prev, [name]: error }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate all fields
    const newErrors = {};
    Object.keys(formData).forEach(key => {
      const error = validateField(key, formData[key]);
      if (error) newErrors[key] = error;
    });
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsLoading(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // For demo purposes, simulate an error sometimes
      if (formData.email === 'error@test.com') {
        throw new Error('Invalid credentials');
      }
      
      // Success - redirect to dashboard
      console.log('Login successful');
      // window.location.href = '/dashboard';
      
    } catch (error) {
      setAuthError('Invalid credentials. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleSocialLogin = (provider) => {
    console.log(`Initiating ${provider} OAuth flow`);
    // Implement OAuth flow here
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-teal-50">
      <Header />
      
      <div className="pt-24 pb-12 px-4">
        <div className="max-w-md mx-auto">
          {/* Card */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            {/* Header with gradient */}
            <div className="bg-gradient-to-r from-[#e0f7fa] to-white px-6 py-8 text-center">
              <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <Umbrella className="w-8 h-8 text-blue-600" />
              </div>
              <h1 className="text-2xl font-bold text-[#006994] mb-2">Welcome Back</h1>
              <p className="text-gray-600">Log in to access your saved beaches and trip plans.</p>
            </div>

            {/* Form */}
            <div className="px-6 py-8">
              {authError && (
                <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
                  {authError}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input
                    type="email"
                    name="email"
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={errors.email ? 'border-red-500' : ''}
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                  )}
                </div>

                <div>
                  <div className="relative">
                    <Input
                      type={showPassword ? 'text' : 'password'}
                      name="password"
                      placeholder="••••••••"
                      value={formData.password}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={errors.password ? 'border-red-500 pr-10' : 'pr-10'}
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    >
                      {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                  {errors.password && (
                    <p className="mt-1 text-sm text-red-600">{errors.password}</p>
                  )}
                </div>

                <div className="text-right">
                  <Link to="/forgot-password" className="text-sm text-blue-600 hover:text-blue-800">
                    Forgot password?
                  </Link>
                </div>

                <Button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg font-medium"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      Logging in...
                    </>
                  ) : (
                    'Log In'
                  )}
                </Button>
              </form>

              {/* Divider */}
              <div className="my-6 flex items-center">
                <div className="flex-1 border-t border-gray-300"></div>
                <span className="px-4 text-sm text-gray-500">or continue with</span>
                <div className="flex-1 border-t border-gray-300"></div>
              </div>

              {/* Social Login */}
              <div className="space-y-3">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => handleSocialLogin('Google')}
                  className="w-full border-gray-300 hover:bg-gray-50"
                >
                  <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIHZpZXdCb3g9IjAgMCAxOCAxOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE3LjY0IDkuMjA0NTVDMTcuNjQgOC41NjYzNiAxNy41ODI3IDcuOTUyNzMgMTcuNDc2NCA3LjM2MzY0SDlWMTAuODQ1NUgxMy44NDM2QzEzLjYzNTkgMTEuOTcgMTMuMDAwOSAxMi45MjMgMTIuMDQ3NyAxMy41NjE0VjE1LjgxOTVIMTQuOTU2NEMxNi42NTg5IDE0LjI1MjMgMTcuNjQgMTEuOTQ1NSAxNy42NCA5LjIwNDU1WiIgZmlsbD0iIzQyODVGNCIvPgo8cGF0aCBkPSJNOSAxOEM5IDEzLjQ1IDkgMTggMTguNzcyNyAxOEMxNC40NTQ1IDE4IDEwLjczNjQgMTcuMTkwOSA4LjE4MTgyIDE1LjIzNjRMMTEuMDIwOSAxMy45MzE4QzExLjczNjQgMTMuMzk1NSAxMi42ODY0IDEzLjMwNDUgMTMuOTU0NSAxM0gxNi4zNjM2VjE1LjE5MDlDMTUuNjA5MSAxNi40NzI3IDE0LjY0MDkgMTcuNjM2NCAxMC45NTQ1IDE4SDE2LjM2MzZDMTYuODA5MSAxOCAxNi45NTQ1IDE3LjgxODIgMTcuMzE4MiAxNy41OTA5QzE3LjY4MTggMTcuMzYzNiAxOCAxNy4yNzI3IDE4IDE2Ljk1NDVaIiBmaWxsPSIjNjQzNjU1Ii8+CjxwYXRoIGQ9Ik05IDEzLjcyNzNDNy43NzI3MyAxNC42ODE4IDUuNzI3MjcgMTQuMjM2NCA1LjE4MTgyIDEzLjMxODJDNS40NTQ1NSAxMi4xMzY0IDUuNzI3MjcgMTAuODY4MiA2IDE5LjY4MTgyWiIgZmlsbD0iI0ZCQkMwNCIvPgo8cGF0aCBkPSJNOSA3LjM2MzY0QzEwLjMzNjQgNS45NTQ1NSAxMi4yNzI3IDUuOTU0NTUgMTQuNzI3MyA2Ljc3MjczSDEzLjYzNjRDMTMuNjM2NCAxMC44NjgyIDEzLjYzNjQgMTEuNjgxOCAxMy40NTQ1IDEyLjEzNjRDMTMuNDU0NSAxMy4wNDU1IDEzLjg2MzYgMTMuNzI3MyAxNC40NTQ1IDEzLjY4MThDMTQuNDU0NSA5IDEzLjkwOTEgMTMuNzI3MyAxMi4yNzI3IDEzLjk1NDVaIiBmaWxsPSIjRUE0MzM1Ii8+Cjwvc3ZnPgo=" alt="Google" className="w-4 h-4 mr-2" />
                  Continue with Google
                </Button>
                <Button
                  type="button"
                  onClick={() => handleSocialLogin('Facebook')}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                >
                  Continue with Facebook
                </Button>
              </div>

              {/* Sign up link */}
              <div className="mt-6 text-center">
                <span className="text-gray-600">Don't have an account? </span>
                <Link to="/signup" className="text-blue-600 hover:text-blue-800 font-medium">
                  Sign up
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
