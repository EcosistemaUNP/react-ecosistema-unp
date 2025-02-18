import type { Meta, StoryObj } from '@storybook/react';
import { ContenidoModal, ItemsModal, Subtitulo } from '../../../../lib/ui';
import { FaBars, FaBookmark, FaHouse, FaUser, FaUsers } from 'react-icons/fa6';
import { BrowserRouter } from 'react-router-dom';
import { FaArchive, FaIndent } from 'react-icons/fa';

const meta: Meta<typeof ContenidoModal> = {
    title: 'Modal/ContenidoModal',
    decorators: [
        (Story) => (
            <BrowserRouter>
                <Story />
            </BrowserRouter>
        )
    ],
    component: ContenidoModal,
    args: {
        title: 'Título'
    },
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

export const ComponenteContenidoModal: Story = {
    args: {
        children:
            <>
                <Subtitulo icon={FaHouse} subtitle='Subtítulo' />
                <ItemsModal
                    sections={
                        [
                            {
                                label: 'Item 1',
                                icon: FaUser,
                                route: '',
                                closed: false
                            },
                            {
                                label: 'Item 2',
                                icon: FaUsers,
                                route: '',
                                closed: true,
                                handleDownload: () => alert('Descargando...')
                            }
                        ]
                    }
                />
            </>
    }
};

export const MúltiplesContenidos: Story = {
    args: {
        modalContent: [
            {
                label: 'Contenido principal',
                content:
                    <>
                        <Subtitulo icon={FaHouse} subtitle='Subtítulo' />
                        <p>
                            Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec vel neque felis. Praesent sed odio velit. Vestibulum mattis metus ante, sit amet commodo libero blandit vel. Aliquam ornare eros eu ipsum mollis finibus. Duis tristique dignissim quam, sed pretium neque maximus tincidunt. Vivamus blandit volutpat quam, ac ornare neque ultrices in. Duis eleifend ante vitae neque interdum consequat. Pellentesque eu congue neque, non blandit diam. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut pellentesque nibh eget urna porta, nec viverra libero lacinia.
                        </p>
                        <ItemsModal
                            sections={
                                [
                                    {
                                        label: 'Item 1',
                                        icon: FaUser,
                                        route: '',
                                        closed: true
                                    },
                                    {
                                        label: 'Item 2',
                                        icon: FaUsers,
                                        route: '',
                                        closed: false
                                    }
                                ]
                            }
                        />
                    </>
            },
            {
                label: 'Contenido adicional',
                icon: FaBookmark,
                content:
                    <>
                        <Subtitulo icon={FaBars} subtitle='Subtítulo' />
                        Mauris lacinia turpis nec libero dictum, porttitor dignissim sem lobortis. Aenean congue purus eros. Aliquam cursus enim sed est ultrices blandit. Fusce nulla tellus, ornare a metus nec, vestibulum dictum arcu. Quisque a urna in elit semper tristique et quis leo. Mauris justo quam, interdum finibus velit quis, cursus viverra neque. Quisque porta, massa eu viverra cursus, arcu diam blandit purus, non dictum mauris enim id ipsum. Donec fermentum rhoncus ullamcorper. Curabitur vel luctus quam. Sed ex purus, hendrerit at ante vel, sagittis aliquet risus. Cras eleifend egestas tempor. Phasellus semper mollis ante eget imperdiet. Cras et velit a sapien dictum tempor a quis quam.
                    </>
            },
            {
                label: 'Otro contenido adicional',
                icon: FaArchive,
                content:
                    <>
                        <Subtitulo icon={FaIndent} subtitle='Subtítulo' />
                        Ut ultricies vestibulum mauris, id euismod felis egestas vel. Praesent erat risus, rutrum ut imperdiet ut, ultricies id libero. Donec eu lectus eu neque commodo vehicula. Vestibulum faucibus molestie sapien, ut ultrices erat facilisis ac. Etiam condimentum nulla vel orci maximus, a imperdiet sem hendrerit. Vestibulum gravida convallis magna in malesuada. Quisque sit amet laoreet nunc. Pellentesque scelerisque a massa id varius. Etiam porttitor metus nec sagittis ullamcorper. Donec tristique eget purus eu facilisis. Morbi ultricies ante vel magna iaculis, ac faucibus quam lobortis. Pellentesque consectetur risus et elit laoreet, eget ornare nibh aliquam. Donec ornare velit nunc, at sollicitudin lectus viverra eget. Aenean malesuada pretium ante, in faucibus turpis mollis eget. Quisque quis mauris accumsan, eleifend sem vel, hendrerit justo.
                    </>
            }
        ]
    }
};
