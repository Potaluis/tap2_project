<script lang="ts">
    import { goto } from '$app/navigation';
    import { auth } from '$lib/firebase';
    import { signInWithEmailAndPassword } from 'firebase/auth';

    let email = '';
    let password = '';
    let errorMessage = '';

    async function handleSubmit(event: SubmitEvent) {
    event.preventDefault();
    errorMessage = ''; // Limpiamos el error anterior

    console.log('Intentando login con:', email); // Log 1

    try {
        if (!auth) {
            console.error('Auth no está inicializado');
            return;
        }

        console.log('Auth está inicializado, intentando login...'); // Log 2
        
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        
        if (userCredential) {
            console.log('Login exitoso:', userCredential.user.email); // Log 3
            goto('/homepage');
        }        
    } catch (error: any) {
        console.error('Error code:', error.code); // Log 4
        console.error('Error message:', error.message); // Log 5
        
        if (error.code === 'auth/user-not-found' || error.code === 'auth/wrong-password') {
            errorMessage = 'Email o contraseña incorrectos';
        } else {
            errorMessage = 'Error al iniciar sesión';
        }
    }
}
</script>

<div class="min-h-screen flex items-center justify-center bg-[#1a1a1a]">
    <div>
        <h1 class="text-8xl font-bold text-center text-white mb-8">
            LOG IN
        </h1>

        {#if errorMessage}
            <div class="text-red-500 text-center mb-4">{errorMessage}</div>
        {/if}
        
        <form on:submit={handleSubmit} class="space-y-4">
            <div class="space-y-4">
                <input 
                    type="email" 
                    bind:value={email}
                    placeholder="Email"
                    class="w-full px-4 py-3 border border-[#DDDDDD] rounded-xl placeholder-gray-400 focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none transition-all"
                    required
                    >
                
                <input 
                    type="password" 
                    bind:value={password}
                    placeholder="Password"
                    class="w-full px-4 py-3 border border-[#DDDDDD] rounded-xl placeholder-gray-400 focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none transition-all"
                    required
                    >
            </div>

            <button 
                type="submit"
                class="w-full px-8 py-3 text-lg font-bold text-white bg-blue-600 rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200">
                Submit
            </button>
        </form>
    </div>
</div>