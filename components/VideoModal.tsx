import React from 'react';

interface VideoModalProps {
    isOpen: boolean;
    onClose: () => void;
    videoPath: string;
}

const VideoModal: React.FC<VideoModalProps> = ({ isOpen, onClose, videoPath }) => {
    if (!isOpen) return null;

    return (
        <div
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                zIndex: 9999,
                backgroundColor: 'rgba(0, 0, 0, 0.9)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '1rem'
            }}
            onClick={onClose}
        >
            <div
                style={{
                    position: 'relative',
                    width: '100%',
                    maxWidth: '1200px',
                    backgroundColor: '#000000',
                    borderRadius: '0.5rem',
                    overflow: 'hidden'
                }}
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    onClick={onClose}
                    style={{
                        position: 'absolute',
                        top: '1rem',
                        right: '1rem',
                        zIndex: 10,
                        backgroundColor: 'rgba(255, 255, 255, 0.2)',
                        color: '#ffffff',
                        border: 'none',
                        borderRadius: '50%',
                        width: '2.5rem',
                        height: '2.5rem',
                        cursor: 'pointer',
                        fontSize: '1.5rem',
                        fontWeight: 'bold',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                >
                    ×
                </button>
                <video
                    src={videoPath}
                    controls
                    autoPlay
                    style={{
                        width: '100%',
                        height: 'auto',
                        maxHeight: '90vh',
                        display: 'block'
                    }}
                />
            </div>
        </div>
    );
};

export default VideoModal;
