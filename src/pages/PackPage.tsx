import { useNavigate, useParams } from 'react-router-dom';
import EditModeButton from '../components/Buttons/IconButtons/EditModeButton';
import ItemCard from '../components/Cards/ItemCard';
import Page from '../components/Page/Page';
import { usePack } from '../hooks/usePack';

const PackPage: React.FC = () => {
    const { id } = useParams();
    const { pack } = usePack(id);

    const navigate = useNavigate();
    return (
        <Page title={pack?.title} hasNavBack>
            {pack && (
                <div>
                    <div>
                        <EditModeButton
                            onClick={() => navigate(`/pack/edit/${pack.id}`)}
                        />
                    </div>
                    <div>
                        {pack.items.map(item => (
                            <ItemCard key={item.id} item={item} />
                        ))}
                    </div>
                </div>
            )}
        </Page>
    );
};

export default PackPage;
