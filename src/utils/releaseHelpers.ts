import { STREAMING_SERVICES } from "./streamingServices";

type Streaming = {
    spotify?: string;
    apple?: string;
    youtube?: string;
    soundcloud?: string;
    vkmusic?: string;
    yandexmusic?: string;
    bandcamp?: string;
};

export function getStreamingServices(streaming: Streaming) {

    return Object.entries(streaming)
        .filter(([, url]) => typeof url === "string")
        .map(([key, url]) => ({

            id: key,

            name:
                STREAMING_SERVICES[
                    key as keyof typeof STREAMING_SERVICES
                ].name,

            url

        }));

}