"use client"

import React, {useState} from 'react';
import {ReactQueryProviderType} from "@/types/react-query-provider";
import {QueryClient} from "@tanstack/query-core";
import {QueryClientProvider} from "@tanstack/react-query";

function ReactQueryProvider({children}: ReactQueryProviderType) {
    const [queryClient] = useState(() => new QueryClient());

    return (
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    );
}

export default ReactQueryProvider;