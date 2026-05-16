import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles } from 'lucide-react';

export default function SignupPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-brand-ivory px-5 py-16">
      <div className="surface-card w-full max-w-md p-8">
        <div className="mb-7 text-center">
          <span className="icon-bubble mx-auto mb-4">
            <Sparkles className="h-5 w-5" />
          </span>
          <p className="eyebrow mb-2">Client Access</p>
          <h1 className="text-4xl">Sign Up</h1>
        </div>
        <form className="space-y-4">
          <input type="text" placeholder="Name" className="field-input" />
          <input type="email" placeholder="Email" className="field-input" />
          <input type="password" placeholder="Password" className="field-input" />
          <button type="submit" className="btn-primary w-full">
            Sign Up
          </button>
        </form>
        <p className="mt-5 text-center text-sm text-brand-charcoal/65">
          Already have an account?{' '}
          <Link to="/login" className="font-semibold text-brand-berry hover:underline">
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
}
