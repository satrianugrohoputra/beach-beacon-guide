
import React from 'react';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleSignUp = () => {
    // Future implementation - would connect to actual auth system
    console.log('Sign up clicked');
    onClose();
  };

  const handleLogin = () => {
    // Future implementation - would connect to actual auth system
    console.log('Login clicked');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="relative">
          <button
            onClick={onClose}
            className="absolute right-4 top-4 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
          >
            <X className="w-5 h-5" />
          </button>
          <CardTitle className="text-center">Join Beach Guide</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-center text-gray-600 dark:text-gray-400">
            Sign up or log in to save beaches to your personal travel plan
          </p>
          <div className="space-y-3">
            <Button 
              onClick={handleSignUp}
              className="w-full bg-gradient-to-r from-blue-500 to-teal-500 hover:from-blue-600 hover:to-teal-600"
            >
              Sign Up Free
            </Button>
            <Button 
              onClick={handleLogin}
              variant="outline" 
              className="w-full"
            >
              Log In
            </Button>
          </div>
          <p className="text-xs text-center text-gray-500 dark:text-gray-400">
            Create your perfect beach itinerary and never lose track of your dream destinations
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default AuthModal;
