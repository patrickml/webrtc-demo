    export default (options) => navigator.mediaDevices
        .getUserMedia(options || {
            audio: true,
            video: true,
        })