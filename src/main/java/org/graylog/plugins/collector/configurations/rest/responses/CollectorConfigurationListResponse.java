package org.graylog.plugins.collector.configurations.rest.responses;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.google.auto.value.AutoValue;
import org.graylog.plugins.collector.configurations.rest.models.CollectorConfigurationSummary;

import java.util.Collection;

@AutoValue
public abstract class CollectorConfigurationListResponse {
    @JsonProperty
    public abstract long total();

    @JsonProperty
    public abstract Collection<CollectorConfigurationSummary> configurations();

    @JsonCreator
    public static CollectorConfigurationListResponse create(@JsonProperty("total") long total,
                                                            @JsonProperty("configurations") Collection<CollectorConfigurationSummary> configurations) {
        return new AutoValue_CollectorConfigurationListResponse(total, configurations);
    }
}