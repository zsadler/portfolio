<script setup lang="ts">
import  { supabase } from  '@/lib/supabaseClient';
</script>

<template>
    <main>
        <RouterView />
        <RouterLink to="/">Home</RouterLink> |
        <RouterLink to="/components">Components</RouterLink> |
        <RouterLink to="/components/singular-component">Component (Singular)</RouterLink>
    </main>
</template>
