import { supabase } from "../conf/conf";

export class SupabaseService {

    async createAccount({ email, password }) {
  try {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          role: "student"
        }
      }
    });

    if (error) throw error;
    return data;

  } catch (error) {
    console.error("Supabase signup error:", error.message);
    throw error;
  }
}


    async login({email, password}) {
        try {
            const { data, error } = await supabase.auth.signInWithPassword({
                email: email,
                password: password,
            });

            if (error) throw error;
            return data; 

            .0
        } catch (error) {
            console.error("Supabase login error: ", error.message);
            throw error;
        }
    }

    async logout() {
        try {
        const { error } = await supabase.auth.signOut();
        if (error) throw error;

        } catch (error) {
        console.error("Supabase logout error: ", error.message);
        throw error;
        }
    }

    async getCurrentUser() {
        try {
        const { data: { session }, error } = await supabase.auth.getSession();
        
        if (error) throw error;
        
        return session?.user ?? null; 

        } catch (error) {
        console.error("Supabase getCurrentUser error: ", error.message);
        return null;
        }
    }

    onAuthChange(callback) {
        const { data: { subscription } } = supabase.auth.onAuthStateChange(
        (_event, session) => {
            callback(session?.user ?? null);
        }
        );

        return subscription;
    }

    async loginWithGoogle() {
        try {
            const { data, error } = await supabase.auth.signInWithOAuth({
                provider: 'google',
            });

            if (error) throw error;
            return data;

        } catch (error) {
            console.error("Google login error: ", error.message);
            throw error;
        }
    }
}

const supabaseService = new SupabaseService();

export default supabaseService


