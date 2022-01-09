import { Link } from 'react-router-dom';
import { Pack } from '../../lib/types/pack';
import Card from './Card';
import ItemThumbnailCard from './ItemThumbnailCard';
import { FaWeightHanging } from 'react-icons/fa';

interface PackCardProps {
    pack: Pack;
}

const PackCard: React.FC<PackCardProps> = ({
    pack: { title, items, id, totalWeight, totalPrice },
}) => {
    return (
        <Link to={`/pack/${id}`}>
            <Card>
                <div>
                    <h1 className='text-lg font-bold lg:text-xl mb-3'>
                        {title}
                    </h1>
                    <div className='text-gravel mb-5'>
                        <p className='flex items-center '>
                            <FaWeightHanging className='mr-2' />
                            {totalWeight}kg
                        </p>
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
