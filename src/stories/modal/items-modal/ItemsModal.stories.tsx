import type { Meta, StoryObj } from '@storybook/react';
import { ItemsModal } from '../../../../lib/ui';
import { BrowserRouter } from 'react-router-dom';
import { FaBuilding, FaLocationDot, FaPhone, FaUser } from 'react-icons/fa6';

const meta: Meta<typeof ItemsModal> = {
    title: 'Modal/ItemsModal',
    component: ItemsModal,
    decorators: [
        (Story) => (
            <BrowserRouter>
                <div style={{ maxHeight: '35rem' }}>
                    <Story />
                </div>
            </BrowserRouter>
        )
    ],
    tags: ['!dev'],
    parameters: {
        docs: {
            source: {
                code: 'Mirar documentación'
            }
        }
    }
}

export default meta;

type Story = StoryObj<typeof meta>;

export const Items: Story = {
    args: {
        sections:
            [
                { label: 'Item 1', icon: FaUser, route: '', closed: true },
                { label: 'Item 2', icon: FaPhone, route: '' },
                { label: 'Item 3', icon: FaLocationDot, route: '', closed: false },
                { label: 'Item 4', icon: FaBuilding, route: '', closed: true, handleDownload: () => alert('Descargando!') }
            ]
    }
};
