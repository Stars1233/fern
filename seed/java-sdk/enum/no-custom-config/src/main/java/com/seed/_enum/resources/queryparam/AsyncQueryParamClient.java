/**
 * This file was auto-generated by Fern from our API Definition.
 */
package com.seed._enum.resources.queryparam;

import com.seed._enum.core.ClientOptions;
import com.seed._enum.core.RequestOptions;
import com.seed._enum.resources.queryparam.requests.SendEnumAsQueryParamRequest;
import com.seed._enum.resources.queryparam.requests.SendEnumListAsQueryParamRequest;
import java.util.concurrent.CompletableFuture;

public class AsyncQueryParamClient {
    protected final ClientOptions clientOptions;

    private final AsyncRawQueryParamClient rawClient;

    public AsyncQueryParamClient(ClientOptions clientOptions) {
        this.clientOptions = clientOptions;
        this.rawClient = new AsyncRawQueryParamClient(clientOptions);
    }

    /**
     * Get responses with HTTP metadata like headers
     */
    public AsyncRawQueryParamClient withRawResponse() {
        return this.rawClient;
    }

    public CompletableFuture<Void> send(SendEnumAsQueryParamRequest request) {
        return this.rawClient.send(request).thenApply(response -> response.body());
    }

    public CompletableFuture<Void> send(SendEnumAsQueryParamRequest request, RequestOptions requestOptions) {
        return this.rawClient.send(request, requestOptions).thenApply(response -> response.body());
    }

    public CompletableFuture<Void> sendList(SendEnumListAsQueryParamRequest request) {
        return this.rawClient.sendList(request).thenApply(response -> response.body());
    }

    public CompletableFuture<Void> sendList(SendEnumListAsQueryParamRequest request, RequestOptions requestOptions) {
        return this.rawClient.sendList(request, requestOptions).thenApply(response -> response.body());
    }
}
