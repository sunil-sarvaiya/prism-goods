import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { SEO } from '@/components/SEO';
import { Card, CardContent } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

interface LoginFormValues {
  email: string;
  password: string;
}

const Login = () => {
  const { register, handleSubmit } = useForm<LoginFormValues>();

  const onSubmit = (data: LoginFormValues) => {
    console.log('Login submit', data);
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO title="Login | EcommerceApp" description="Sign in to your EcommerceApp account to track orders, manage addresses, and continue shopping." canonical={window.location.href} />
      <Header />
      <main className="container mx-auto px-4 py-12">
        <section className="max-w-md mx-auto">
          <h1 className="text-3xl font-bold mb-6">Login</h1>
          <Card>
            <CardContent className="p-6 space-y-4">
              <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="you@example.com" {...register('email')} required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <Input id="password" type="password" placeholder="••••••••" {...register('password')} required />
                </div>
                <div className="flex items-center justify-between">
                  <Button type="submit" className="w-full">Sign In</Button>
                </div>
              </form>
              <p className="text-sm text-muted-foreground text-center">
                Don't have an account?{' '}
                <Link to="/register" className="text-primary hover:text-primary-glow">Create one</Link>
              </p>
            </CardContent>
          </Card>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Login;
