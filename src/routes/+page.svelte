
<script lang="ts">
    import { goto } from '$app/navigation';

    function handleSubmit(event: SubmitEvent) {
        event.preventDefault();
        goto('/homepage');
    }
</script>

<div class="min-h-screen flex items-center justify-center bg-[#1a1a1a]">
    <div>
        <h1 class="text-8xl font-bold text-center text-white mb-8">
            LOG IN
        </h1>
        
        <form on:submit={handleSubmit} class="space-y-4">
            <div class="space-y-4">
                <input 
                    type="text" 
                    id="username" 
                    name="username" 
                    placeholder="Username"
                    class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                >
                
                <input 
                    type="password" 
                    id="pswd" 
                    name="pswd" 
                    placeholder="Password"
                    class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
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