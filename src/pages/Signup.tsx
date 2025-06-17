
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Sun, Eye, EyeOff, Loader2, Check, X } from 'lucide-react';
import Header from '@/components/Header';

const Signup = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    favoriteBeachType: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [authError, setAuthError] = useState('');

  const beachTypes = [
    'Tropical Paradise',
    'Secluded Coves',
    'Surf & Waves',
    'Family Friendly',
    'Luxury Resorts',
    'Adventure Sports'
  ];

  const getPasswordStrength = (password) => {
    let strength = 0;
    const checks = {
      length: password.length >= 8,
      uppercase: /[A-Z]/.test(password),
      lowercase: /[a-z]/.test(password),
      number: /[0-9]/.test(password),
      special: /[^A-Za-z0-9]/.test(password)
    };

    strength = Object.values(checks).filter(Boolean).length;
    
    return {
      strength,
      checks,
      label: strength <= 1 ? 'Weak' : strength <= 3 ? 'Medium' : 'Strong'
    };
  };

  const passwordStrength = getPasswordStrength(formData.password);

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
      case 'fullName':
        if (!value.trim()) return 'Full name is required';
        return '';
      case 'email':
        if (!value) return 'Email is required';
        if (!/\S+@\S+\.\S+/.test(value)) return 'Invalid email format';
        return '';
      case 'password':
        if (!value) return 'Password is required';
        if (value.length < 8) return 'Password must be at least 8 characters';
        return '';
      case 'confirmPassword':
        if (!value) return 'Please confirm your password';
        if (value !== formData.password) return 'Passwords do not match';
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
    
    // Validate all required fields
    const newErrors = {};
    ['fullName', 'email', 'password', 'confirmPassword'].forEach(key => {
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
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // For demo purposes, simulate an error sometimes
      if (formData.email === 'existing@test.com') {
        throw new Error('Email already in use');
      }
      
      // Success - auto-login and redirect to dashboard
      console.log('Signup successful');
      // window.location.href = '/dashboard';
      
    } catch (error) {
      setAuthError('Email already in use. Please try a different email.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleSocialLogin = (provider) => {
    console.log(`Initiating ${provider} OAuth flow`);
    // Implement OAuth flow here
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50">
      <Header />
      
      <div className="pt-24 pb-12 px-4">
        <div className="max-w-lg mx-auto">
          {/* Card */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            {/* Header with gradient */}
            <div className="bg-gradient-to-r from-[#f5f5dc] to-white px-6 py-8 text-center">
              <div className="mx-auto w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                <Sun className="w-8 h-8 text-orange-600" />
              </div>
              <h1 className="text-2xl font-bold text-[#006994] mb-2">Create Your Beach Guide Account</h1>
              <p className="text-gray-600">Join free to save beaches, plan trips, and share stories.</p>
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
                    type="text"
                    name="fullName"
                    placeholder="Full Name"
                    value={formData.fullName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={errors.fullName ? 'border-red-500' : ''}
                  />
                  {errors.fullName && (
                    <p className="mt-1 text-sm text-red-600">{errors.fullName}</p>
                  )}
                </div>

                <div>
                  <Input
                    type="email"
                    name="email"
                    placeholder="Email Address"
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
                      placeholder="Password"
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
                  
                  {/* Password Strength Meter */}
                  {formData.password && (
                    <div className="mt-2">
                      <div className="flex items-center space-x-2">
                        <div className="flex-1 bg-gray-200 rounded-full h-2">
                          <div 
                            className={`h-2 rounded-full transition-all duration-300 ${
                              passwordStrength.strength <= 1 ? 'bg-red-500 w-1/4' :
                              passwordStrength.strength <= 3 ? 'bg-yellow-500 w-2/4' :
                              'bg-green-500 w-full'
                            }`}
                          />
                        </div>
                        <span className={`text-xs font-medium ${
                          passwordStrength.strength <= 1 ? 'text-red-500' :
                          passwordStrength.strength <= 3 ? 'text-yellow-500' :
                          'text-green-500'
                        }`}>
                          {passwordStrength.label}
                        </span>
                      </div>
                      <div className="mt-1 space-y-1">
                        {Object.entries({
                          length: '8+ characters',
                          uppercase: 'Uppercase letter',
                          lowercase: 'Lowercase letter',
                          number: 'Number',
                          special: 'Special character'
                        }).map(([key, label]) => (
                          <div key={key} className="flex items-center space-x-1 text-xs">
                            {passwordStrength.checks[key] ? (
                              <Check className="w-3 h-3 text-green-500" />
                            ) : (
                              <X className="w-3 h-3 text-gray-300" />
                            )}
                            <span className={passwordStrength.checks[key] ? 'text-green-600' : 'text-gray-500'}>
                              {label}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                <div>
                  <div className="relative">
                    <Input
                      type={showConfirmPassword ? 'text' : 'password'}
                      name="confirmPassword"
                      placeholder="Confirm Password"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={errors.confirmPassword ? 'border-red-500 pr-10' : 'pr-10'}
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    >
                      {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                  {errors.confirmPassword && (
                    <p className="mt-1 text-sm text-red-600">{errors.confirmPassword}</p>
                  )}
                </div>

                <div>
                  <select
                    name="favoriteBeachType"
                    value={formData.favoriteBeachType}
                    onChange={handleChange}
                    className="w-full h-10 px-3 py-2 border border-gray-300 rounded-md bg-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Favorite Beach Type (Optional)</option>
                    {beachTypes.map(type => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>

                <Button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-gradient-to-r from-teal-400 to-blue-500 hover:from-teal-500 hover:to-blue-600 text-white py-2 rounded-lg font-medium"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      Creating account...
                    </>
                  ) : (
                    'Sign Up'
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
                  <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIHZpZXdCb3g9IjAgMCAxOCAxOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE3LjY0IDkuMjA0NTVDMTcuNjQgOC41NjYzNiAxNy41ODI3IDcuOTUyNzMgMTcuNDc2NCA3LjM2MzY0SDlWMTAuODQ1NUgxMy44NDM2QzEzLjYzNTkgMTEuOTcgMTMuMDAwOSAxMi45MjMgMTIuMDQ3NyAxMy41NjE0VjE1LjgxOTVIMTQuOTU2NEMxNi42NTg5IDE0LjI1MjMgMTcuNjQgMTEuOTQ1NSAxNy42NCA5LjIwNDU1WiIgZmlsbD0iIzQyODVGNCIvPgo8cGF0aCBkPSJNOSAxOEM5IDEzLjQ1IDkgMTggMTguNzcyNyAxOEMxNC40NTQ1IDE4IDEwLjczNjQgMTcuMTkwOSA4LjE4MTgyIDE1LjIzNjRMMTEuMDIwOSAxMy45MzE4QzExLjczNjQgMTMuMzk1NSAxMi42ODY0IDEzLjMwNDUgMTMuOTU0NSAxM0gxNi4zNjM2VjE1LjE5MDlDMTUuNjA5MSAxNi40NzI3IDE0LjY0MDkgMTcuNjM2NCAxMC45NTQ1IDE4SDE2LjM2MzZDMTYuODA5MSAxOCAxNi45NTQ1IDE3LjgxODIgMTcuMzE4MiAxNy41OTA5QzE3LjY4MTggMTcuMzYzNiAxOCAxNy4yNzI3IDE4IDE2Ljk1NDVaIiBmaWxsPSIjNjQzNjU1Ii8+CjxwYXRoIGQ9Ik05IDEzLjcyNzNDNy43NzI3MyAxNC42ODE4IDUuNzI3MjcgMTQuMjM2NCA1LjE4MTgyIDEzLjMxODJDNS40NTQ1NSAxMi4xMzY0IDUuNzI3MjcgMTAuODY4MiA2IDkuNjgxODJaIiBmaWxsPSIjRkJCQzA0Ii8+CjxwYXRoIGQ9Ik05IDcuMzYzNjRDMTAuMzM2NCA1Ljk1NDU1IDEyLjI3MjcgNS45NTQ1NSAxNC43MjczIDYuNzcyNzNIMTMuNjM2NEMxMy42MzY0IDEwLjg2ODIgMTMuNjM2NCAxMS42ODE4IDEzLjQ1NDUgMTIuMTM2NEMxMy40NTQ1IDEzLjA0NTUgMTMuODYzNiAxMy43MjczIDE0LjQ1NDUgMTMuNjgxOEMxNC40NTQ1IDkgMTMuOTA5MSAxMy43MjczIDEyLjI3MjcgMTMuOTU0NVoiIGZpbGw9IiNFQTQzMzUiLz4KPC9zdmc+Cg==" alt="Google" className="w-4 h-4 mr-2" />
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

              {/* Login link */}
              <div className="mt-6 text-center">
                <span className="text-gray-600">Already have an account? </span>
                <Link to="/login" className="text-blue-600 hover:text-blue-800 font-medium">
                  Log in
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
