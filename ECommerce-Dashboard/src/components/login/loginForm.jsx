import React, { useState } from "react";
import { Mail, Lock, Eye, EyeOff } from "lucide-react";
import { useAuth } from "../../hooks/useAuth";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function LoginForm() {
  const { login } = useAuth();
  const { register, handleSubmit } = useForm();
  const [showPass, setShowPass] = useState(false);
  const navigate = useNavigate();
  const [saving, setIsSaving] = useState(false);

 const onSubmit = async (data) => {
    try{
      setIsSaving(true)
    const res = await login(data.email, data.password);
    if (res.success) {
      toast.success(res.message);
      navigate("/dashboard", { replace: true });
    } else {
      toast.error(res.message);
    }
    }catch(err){
    toast.error("Something went wrong")
    }finally{
      setIsSaving(false)
    }
  };

  return (
  
<div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-slate-50 px-4 py-8 transition-colors dark:bg-slate-950 sm:px-6">
  {/* Background Decorations */}
  <div className="pointer-events-none absolute inset-0 overflow-hidden">
    <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl dark:bg-blue-500/10" />
    <div className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-indigo-500/10 blur-3xl dark:bg-indigo-500/10" />
  </div>

  <div className="relative z-10 w-full max-w-md">

    <form
      onSubmit={handleSubmit(onSubmit)}
      className="rounded-3xl border border-slate-200/80 bg-white/90 p-6 shadow-2xl shadow-slate-200/50 backdrop-blur-xl dark:border-slate-800/80 dark:bg-slate-900/90 dark:shadow-black/20 sm:p-8"
    >
     
      <div className="text-center">
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-2xl border border-slate-100 bg-white p-2 shadow-lg shadow-slate-200/60 dark:border-slate-800 dark:bg-slate-800 dark:shadow-black/20">
          <img
            src="/src/assets/logo1.png"
            alt="Store Logo"
            className="h-full w-full object-contain"
          />
        </div>

        <h2 className="mt-6 text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
          Welcome Back
        </h2>

        <p className="mt-2 text-sm leading-6 text-slate-500 dark:text-slate-400">
          Sign in to access your admin dashboard
        </p>
      </div>

      
      <div className="mt-8 space-y-5">
     
        <div>
          <label className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-300">
            Email Address
          </label>

          <div className="group relative">
            <Mail
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 transition-colors group-focus-within:text-blue-600 dark:group-focus-within:text-blue-400"
            />

            <input
              type="email"
              placeholder="name@example.com"
              {...register("email", { required: true })}
              className="w-full rounded-xl border border-slate-200 bg-slate-50/70 py-3.5 pl-11 pr-4 text-sm text-slate-900 outline-none transition-all placeholder:text-slate-400 hover:border-slate-300 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10 dark:border-slate-700 dark:bg-slate-800/60 dark:text-white dark:hover:border-slate-600 dark:focus:border-blue-500 dark:focus:bg-slate-800 dark:focus:ring-blue-500/10"
            />
          </div>
        </div>

      
        <div>
          <label className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-300">
            Password
          </label>

          <div className="group relative">
            <Lock
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 transition-colors group-focus-within:text-blue-600 dark:group-focus-within:text-blue-400"
            />

            <input
              type={showPass ? "text" : "password"}
              placeholder="Enter your password"
              {...register("password", { required: true })}
              className="w-full rounded-xl border border-slate-200 bg-slate-50/70 py-3.5 pl-11 pr-12 text-sm text-slate-900 outline-none transition-all placeholder:text-slate-400 hover:border-slate-300 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10 dark:border-slate-700 dark:bg-slate-800/60 dark:text-white dark:hover:border-slate-600 dark:focus:border-blue-500 dark:focus:bg-slate-800 dark:focus:ring-blue-500/10"
            />

            <button
              type="button"
              onClick={() => setShowPass((prev) => !prev)}
              aria-label={showPass ? "Hide password" : "Show password"}
              className="absolute right-3 top-1/2 -translate-y-1/2 rounded-lg p-1.5 text-slate-400 transition-colors hover:bg-slate-100 hover:text-slate-600 dark:hover:bg-slate-700 dark:hover:text-slate-200"
            >
              {showPass ? <EyeOff size={17} /> : <Eye size={17} />}
            </button>
          </div>
        </div>
      </div>

      
      <div className="mt-7">
        <button
          disabled={saving}
          type="submit"
          className="group relative flex w-full items-center justify-center overflow-hidden rounded-xl bg-blue-600 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition-all duration-200 hover:bg-blue-500 hover:shadow-xl hover:shadow-blue-600/25 active:scale-[0.98] disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-60"
        >
          <span className="relative z-10">
            {saving ? "Signing In..." : "Sign In"}
          </span>

          {!saving && (
            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
          )}
        </button>
      </div>

      
      <div className="my-7 flex items-center gap-4">
        <div className="h-px flex-1 bg-slate-200 dark:bg-slate-800" />

        <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500">
          OR
        </span>

        <div className="h-px flex-1 bg-slate-200 dark:bg-slate-800" />
      </div>

     
      <a
        href="https://e-commerce-api-3wara.vercel.app/auth/google"
        className="flex w-full items-center justify-center gap-3 rounded-xl border border-slate-200 bg-white py-3.5 text-sm font-semibold text-slate-700 shadow-sm transition-all hover:-translate-y-0.5 hover:border-slate-300 hover:bg-slate-50 hover:shadow-md dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:hover:border-slate-600 dark:hover:bg-slate-700"
      >
        <span className="flex h-5 w-5 items-center justify-center">
          <img
            src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
            alt="Google"
            className="h-5 w-5"
          />
        </span>

        <span>Continue with Google</span>
      </a>

      
      <div className="mt-7 flex items-center justify-center gap-2 border-t border-slate-100 pt-5 dark:border-slate-800">
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
        </span>

        <span className="text-[11px] font-semibold uppercase tracking-widest text-slate-400 dark:text-slate-500">
          Secure Admin Access
        </span>
      </div>
    </form>

    
    <p className="mt-6 text-center text-xs text-slate-400 dark:text-slate-600">
      © {new Date().getFullYear()} Admin Dashboard. All rights reserved.
    </p>
  </div>
</div>
  );
}

export default React.memo(LoginForm);
