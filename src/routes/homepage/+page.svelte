<script lang="ts">
    import BackgroundPattern from "../components/backgroundPattern.svelte";
    import Drawer from "../components/drawer.svelte";
    import ProfileDrawer from "../components/profileDrawer.svelte";

</script>

<Drawer drawerButtonKind="Drawer" drawerPosition="left"></Drawer>

<ProfileDrawer drawerButtonKind="Profile" drawerPosition="right"></ProfileDrawer>

<BackgroundPattern></BackgroundPattern>




