import { Link } from 'react-router-dom';
import { Pack } from '../../lib/types/pack';
import Card from './Card';
import ItemThumbnailCard from './ItemThumbnailCard';
import { FaWeightHanging } from 'react-icons/fa';
import WeatherSelection from '../Input/WeatherSelection';

interface PackCardProps {
    pack: Pack;
}

const PackCard: React.FC<PackCardProps> = ({
    pack: { title, items, id, totalWeight, weather },
}) => {
    return (
        <Link to={`/pack/${id}`}>
            <Card>
                <div>
                    <h1 className='text-lg font-bold lg:text-xl mb-3'>
                        {title}
                    </h1>
                    <div className='flex items-center mb-5'>
                        <div
                            className='
                            flex
                            bg-dark 
                            rounded-full
                            p-2
                            items-center
                            justify-center
                            w-fit
                            mr-4
                        '>
                            {weather?.map(w => (
                                <div key={w} className='mx-1'>
                                    <WeatherSelection
                                        type={w}
                                        isActive
                                        iconSize={20}
                                    />
                                </div>
                            ))}
                        </div>
                        <div className='text-gravel'>
                            <p className='flex items-center '>
                                <FaWeightHanging className='mr-2' />
                                {totalWeight}kg
                            </p>
                        </div>
                    </div>
                    <div className='flex'>
                        {items.map(item => (
                            <ItemThumbnailCard key={item.id} item={item} />
                        ))}
                    </div>
                </div>
            </Card>
        </Link>
    );
};

export default PackCard;
