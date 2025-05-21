declare module 'laravel-permission-to-vuejs' {

    import { Plugin } from 'vue';
    const LaravelPermissionToVueJS: Plugin;
    export default LaravelPermissionToVueJS;

    export function can (permission: string): boolean;
    export function is (permission: string): boolean;
}
