/**
 * Contains text and audio information about a item
 * Can also be used as a delta
 * @typedef {Object} ItemContentDeltaType
 * @property {string} [text]
 * @property {Int16Array} [audio]
 * @property {string} [arguments]
 * @property {string} [transcript]
 */
/**
 * RealtimeConversation holds conversation history
 * and performs event validation for RealtimeAPI
 * @class
 */
export class RealtimeConversation {
    defaultFrequency: number;
    EventProcessors: {
        'conversation.item.created': (event: any) => {
            item: any;
            delta: null;
        };
        'conversation.item.truncated': (event: any) => {
            item: any;
            delta: null;
        };
        'conversation.item.deleted': (event: any) => {
            item: any;
            delta: null;
        };
        'conversation.item.input_audio_transcription.completed': (event: any) => {
            item: null;
            delta: null;
        } | {
            item: any;
            delta: {
                transcript: any;
            };
        };
        'input_audio_buffer.speech_started': (event: any) => {
            item: null;
            delta: null;
        };
        'input_audio_buffer.speech_stopped': (event: any, inputAudioBuffer: any) => {
            item: null;
            delta: null;
        };
        'response.created': (event: any) => {
            item: null;
            delta: null;
        };
        'response.output_item.added': (event: any) => {
            item: null;
            delta: null;
        };
        'response.output_item.done': (event: any) => {
            item: any;
            delta: null;
        };
        'response.content_part.added': (event: any) => {
            item: any;
            delta: null;
        };
        'response.audio_transcript.delta': (event: any) => {
            item: any;
            delta: {
                transcript: any;
            };
        };
        'response.audio.delta': (event: any) => {
            item: any;
            delta: {
                audio: Int16Array;
            };
        };
        'response.text.delta': (event: any) => {
            item: any;
            delta: {
                text: any;
            };
        };
        'response.function_call_arguments.delta': (event: any) => {
            item: any;
            delta: {
                arguments: any;
            };
        };
    };
    queuedInputAudio: Int16Array | null | undefined;
    /**
     * Clears the conversation history and resets to default
     * @returns {true}
     */
    clear(): true;
    itemLookup: {} | undefined;
    items: any[] | undefined;
    responseLookup: {} | undefined;
    responses: any[] | undefined;
    queuedSpeechItems: {} | undefined;
    queuedTranscriptItems: {} | undefined;
    /**
     * Queue input audio for manual speech event
     * @param {Int16Array} inputAudio
     * @returns {Int16Array}
     */
    queueInputAudio(inputAudio: Int16Array): Int16Array;
    /**
     * Process an event from the WebSocket server and compose items
     * @param {Object} event
     * @param  {...any} args
     * @returns {item: import('./client.js').ItemType | null, delta: ItemContentDeltaType | null}
     */
    processEvent(event: Object, ...args: any[]): item;
    /**
     * Retrieves a item by id
     * @param {string} id
     * @returns {import('./client.js').ItemType}
     */
    getItem(id: string): import("./client.js").ItemType;
    /**
     * Retrieves all items in the conversation
     * @returns {import('./client.js').ItemType[]}
     */
    getItems(): import("./client.js").ItemType[];
}
/**
 * Contains text and audio information about a item
 * Can also be used as a delta
 */
export type ItemContentDeltaType = {
    text?: string | undefined;
    audio?: Int16Array | undefined;
    arguments?: string | undefined;
    transcript?: string | undefined;
};
//# sourceMappingURL=conversation.d.ts.map