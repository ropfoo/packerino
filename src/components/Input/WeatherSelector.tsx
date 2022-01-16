import { useField } from 'formik';
import { WeatherType } from '../../lib/types/pack';
import WeatherSelection from './WeatherSelection';

interface WeahterSelectorProps {
    name: string;
}

const WeatherSelector: React.FC<WeahterSelectorProps> = ({ name }) => {
    const [{ value }, , { setValue }] = useField<WeatherType[]>(name);

    const handleWeatherSelection = (weather: WeatherType) => {
        if (!value) return setValue([weather]);
        if (value.includes(weather))
            return setValue(value.filter(w => w !== weather));
        return setValue([...value, weather]);
    };
    return (
        <div>
            <h3 className='text-lg my-5'>Weather Conditions</h3>
            <div className='flex'>
                <WeatherSelection
                    type={WeatherType.SUN}
                    isActive={value?.includes(WeatherType.SUN)}
                    showLabel
                    onClick={weather => handleWeatherSelection(weather)}
                />
                <WeatherSelection
                    type={WeatherType.RAIN}
                    isActive={value?.includes(WeatherType.RAIN)}
                    showLabel
                    onClick={weather => handleWeatherSelection(weather)}
                />
                <WeatherSelection
                    type={WeatherType.SNOW}
                    isActive={value?.includes(WeatherType.SNOW)}
                    showLabel
                    onClick={weather => handleWeatherSelection(weather)}
                />
            </div>
        </div>
    );
};

export default WeatherSelector;
