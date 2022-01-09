import { useMemo } from 'react';
import { WeatherType } from '../../lib/types/pack';
import {
    BsCloudSnowFill,
    BsFillCloudRainHeavyFill,
    BsFillSunFill,
} from 'react-icons/bs';

const ICON_SIZE = 30;

interface WeatherSelectionProps {
    type: WeatherType;
    isActive: boolean;
    onClick: (weather: WeatherType) => void;
}

const WeatherSelection: React.FC<WeatherSelectionProps> = ({
    isActive,
    type,
    onClick,
}) => {
    const { label, icon } = useMemo(() => {
        switch (type) {
            case WeatherType.SUN:
                return {
                    icon: <BsFillSunFill size={ICON_SIZE} />,
                    label: 'sun',
                };
            case WeatherType.RAIN:
                return {
                    icon: <BsFillCloudRainHeavyFill size={ICON_SIZE} />,
                    label: 'rain',
                };
            case WeatherType.SNOW:
                return {
                    icon: <BsCloudSnowFill size={ICON_SIZE} />,
                    label: 'snow',
                };

            default:
                return {
                    icon: <BsCloudSnowFill size={ICON_SIZE} />,
                    label: 'snow',
                };
        }
    }, [type]);

    return (
        <div
            onClick={() => onClick(type)}
            className={`
            flex 
            flex-col 
            items-center 
            justify-center 
            mr-10 
            last-of-type:mr-0
            ${isActive ? 'text-gravel' : 'text-stonewet'}
        `}>
            <div className='mb-2'>{icon}</div>
            <div className='text-sm'>{label}</div>
        </div>
    );
};

export default WeatherSelection;
