import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { SEO } from '@/components/SEO';
import { Card, CardContent } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

interface RegisterFormValues {
  name: string;
  email: string;
  password: string;
}

const Register = () => {
  const { register, handleSubmit } = useForm<RegisterFormValues>();

  const onSubmit = (data: RegisterFormValues) => {
    console.log('Register submit', data);
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO title="Create Account | EcommerceApp" description="Create your EcommerceApp account to save addresses, view orders, and enjoy a personalized shopping experience." canonical={window.location.href} />
      <Header />
      <main className="container mx-auto px-4 py-12">
        <section className="max-w-md mx-auto">
          <h1 className="text-3xl font-bold mb-6">Create Account</h1>
          <Card>
            <CardContent className="p-6 space-y-4">
              <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" type="text" placeholder="Your name" {...register('name')} required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="you@example.com" {...register('email')} required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <Input id="password" type="password" placeholder="••••••••" {...register('password')} required />
                </div>
                <Button type="submit" className="w-full">Create Account</Button>
              </form>
              <p className="text-sm text-muted-foreground text-center">
                Already have an account?{' '}
                <Link to="/login" className="text-primary hover:text-primary-glow">Sign in</Link>
              </p>
            </CardContent>
          </Card>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Register;
