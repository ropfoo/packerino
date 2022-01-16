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
    onClick?: (weather: WeatherType) => void;
    showLabel?: boolean;
    iconSize?: number;
}

const WeatherSelection: React.FC<WeatherSelectionProps> = ({
    isActive,
    showLabel,
    type,
    onClick,
    iconSize,
}) => {
    const { label, icon } = useMemo(() => {
        switch (type) {
            case WeatherType.SUN:
                return {
                    icon: <BsFillSunFill size={iconSize ?? ICON_SIZE} />,
                    label: 'sun',
                };
            case WeatherType.RAIN:
                return {
                    icon: (
                        <BsFillCloudRainHeavyFill
                            size={iconSize ?? ICON_SIZE}
                        />
                    ),
                    label: 'rain',
                };
            case WeatherType.SNOW:
                return {
                    icon: <BsCloudSnowFill size={iconSize ?? ICON_SIZE} />,
                    label: 'snow',
                };

            default:
                return {
                    icon: <BsCloudSnowFill size={iconSize ?? ICON_SIZE} />,
                    label: 'snow',
                };
        }
    }, [type, iconSize]);

    return (
        <div
            onClick={() => onClick && onClick(type)}
            className={`
            flex 
            flex-col 
            items-center 
            justify-center
            mr-10 
            last-of-type:mr-0
            ${isActive ? 'text-gravel' : 'text-stonewet'}
        `}>
            <div>{icon}</div>
            {showLabel && <div className='mt-2 text-sm'>{label}</div>}
        </div>
    );
};

export default WeatherSelection;
