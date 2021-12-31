const LoadingSpinner: React.FC = () => {
    return (
        <svg
            className='animate-spin h-20'
            width='656'
            height='656'
            viewBox='0 0 656 656'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'>
            <circle
                cx='328'
                cy='328'
                r='269.5'
                stroke='white'
                strokeOpacity='0.31'
                strokeWidth='117'
            />
            <path
                d='M656 328C656 371.074 647.516 413.725 631.032 453.52C614.549 493.315 590.389 529.473 559.931 559.931C529.473 590.389 493.315 614.549 453.52 631.032C413.725 647.516 371.074 656 328 656L328 539.474C355.771 539.474 383.27 534.004 408.928 523.377C434.585 512.749 457.898 497.172 477.535 477.535C497.172 457.898 512.749 434.585 523.377 408.928C534.004 383.27 539.474 355.771 539.474 328H656Z'
                fill='white'
            />
        </svg>
    );
};

export default LoadingSpinner;
