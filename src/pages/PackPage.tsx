import { FaMoneyBillWave, FaWeightHanging } from 'react-icons/fa';
import { useParams } from 'react-router-dom';
import InfoElement from '../components/InfoElement';
import PackContextMenu from '../components/PackContextMenu';
import Page from '../components/Page/Page';
import { usePack } from '../hooks/usePack';
import { ItemsList } from './ItemsPage';

const PackPage: React.FC = () => {
    const { id } = useParams();
    const { pack } = usePack(id);

    return (
        <Page
            title={pack?.title}
            hasNavBack
            titleElement={<PackContextMenu pack={pack} />}>
            {pack && (
                <div>
                    <ul className='flex mb-10'>
                        <li>
                            <InfoElement
                                icon={<FaMoneyBillWave size={20} />}
                                label='value'
                                value={`${pack.totalPrice}€` ?? ''}
                            />
                        </li>
                        <li>
                            <InfoElement
                                icon={<FaMoneyBillWave size={20} />}
                                label='required'
                                value={`${pack.totalPriceReq}€` ?? ''}
                            />
                        </li>
                        <li>
                            <InfoElement
                                icon={<FaWeightHanging size={20} />}
                                label='weight'
                                value={`${pack.totalWeight}kg` ?? ''}
                            />
                        </li>
                    </ul>
                    <div>
                        {pack.weather?.map(w => (
                            <p key={w}>{w}</p>
                        ))}
                    </div>
                    <ItemsList items={pack.items} />
                </div>
            )}
        </Page>
    );
};

export default PackPage;
