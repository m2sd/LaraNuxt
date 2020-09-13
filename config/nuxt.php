<?php

return [
    // Automatically register nuxt catchall route
    'routing' => false,
    
    // Nuxt base path
    'prefix'  => 'app',

    // Source for nuxt resources, if ssr is true this MUST be a URL
    'source'  => env('NUXT_OUTPUT_PATH', public_path('spa.html')),

    // Whether or not to use SSR proxying (i.e. attaching the request URI to the source)
    'ssr'     => env('NUXT_SSR_PROXY', false),
];
