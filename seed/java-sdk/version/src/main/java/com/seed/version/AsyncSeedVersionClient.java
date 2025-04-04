/**
 * This file was auto-generated by Fern from our API Definition.
 */
package com.seed.version;

import com.seed.version.core.ClientOptions;
import com.seed.version.core.Suppliers;
import com.seed.version.resources.user.AsyncUserClient;
import java.util.function.Supplier;

public class AsyncSeedVersionClient {
    protected final ClientOptions clientOptions;

    protected final Supplier<AsyncUserClient> userClient;

    public AsyncSeedVersionClient(ClientOptions clientOptions) {
        this.clientOptions = clientOptions;
        this.userClient = Suppliers.memoize(() -> new AsyncUserClient(clientOptions));
    }

    public AsyncUserClient user() {
        return this.userClient.get();
    }

    public static AsyncSeedVersionClientBuilder builder() {
        return new AsyncSeedVersionClientBuilder();
    }
}
