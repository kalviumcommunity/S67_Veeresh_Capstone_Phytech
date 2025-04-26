import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useForm } from 'react-hook-form';
import { useToast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { BanknoteIcon, ShieldCheck } from 'lucide-react';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const sellerFormSchema = z.object({
  businessName: z.string().min(2, 'Business name must be at least 2 characters'),
  businessAddress: z.string().min(5, 'Please enter a valid business address'),
  gstNumber: z.string().min(15, 'GST number must be 15 characters').max(15),
  bankName: z.string().min(2, 'Bank name is required'),
  accountNumber: z.string().min(8, 'Please enter a valid account number'),
  ifscCode: z.string().min(11, 'IFSC code must be 11 characters').max(11),
  panNumber: z.string().min(10, 'PAN number must be 10 characters').max(10)
});

type SellerFormData = z.infer<typeof sellerFormSchema>;

const SellerRegistrationPage = () => {
  const { currentUser, becomeSeller } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const form = useForm<SellerFormData>({
    resolver: zodResolver(sellerFormSchema),
    defaultValues: {
      businessName: '',
      businessAddress: '',
      gstNumber: '',
      bankName: '',
      accountNumber: '',
      ifscCode: '',
      panNumber: '',
    },
  });

  const onSubmit = async (data: SellerFormData) => {
    try {
      const result = await becomeSeller(data);
      if (result.success) {
        toast({
          title: "Registration Successful",
          description: "Your seller account is under review. We'll notify you once approved.",
        });
        navigate('/dashboard');
      } else {
        throw new Error(result.error);
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Registration failed",
        description: error instanceof Error ? error.message : "Please try again later.",
      });
    }
  };

  if (!currentUser) {
    navigate('/login');
    return null;
  }

  return (
    <div className="container max-w-2xl mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="flex items-center gap-2 mb-6">
          <BanknoteIcon className="h-6 w-6 text-purple-600" />
          <h1 className="text-2xl font-bold text-gray-900">Become a Seller</h1>
        </div>

        <div className="bg-purple-50 border border-purple-100 rounded-lg p-4 mb-6">
          <div className="flex items-start gap-2">
            <ShieldCheck className="h-5 w-5 text-purple-600 mt-0.5" />
            <div>
              <h3 className="font-medium text-purple-900">Verified Seller Program</h3>
              <p className="text-sm text-purple-700">
                Complete your seller profile to start selling on PhyTech. We verify all sellers
                to ensure quality service for our customers.
              </p>
            </div>
          </div>
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="businessName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Business Name</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="Your business name" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="businessAddress"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Business Address</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="Complete business address" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="gstNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>GST Number</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="Valid GST number" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="bg-gray-50 p-4 rounded-lg space-y-6">
              <h3 className="font-medium text-gray-900">Bank Account Details</h3>
              
              <FormField
                control={form.control}
                name="bankName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Bank Name</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="Your bank name" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="accountNumber"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Account Number</FormLabel>
                    <FormControl>
                      <Input {...field} type="number" placeholder="Your account number" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="ifscCode"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>IFSC Code</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="Bank IFSC code" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="panNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>PAN Number</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="Your PAN number" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" disabled={form.formState.isSubmitting} className="w-full">
              {form.formState.isSubmitting ? "Submitting..." : "Submit Seller Application"}
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default SellerRegistrationPage;
