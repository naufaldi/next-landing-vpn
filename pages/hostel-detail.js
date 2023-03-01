import projectsData from '../data/projectsData'
import Card from '../components/Card'
import SeoHead from "../components/SeoHead";
import Layout from "../components/Layout/Layout";
import { Viewer, Worker } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';

import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

export default function HostelDetails() {
    const defaultLayoutPluginInstance = defaultLayoutPlugin();

    return (
        <Layout>
            <SeoHead title='Hostel Detail' />
            <div className="max-w-screen-xl mt-24 px-8 xl:px-16 mx-auto">
                <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.15.349/build/pdf.worker.js">
                    <div
                        style={{
                            height: '750px',
                            width: '900px',
                            marginLeft: 'auto',
                            marginRight: 'auto',
                        }}
                    >
                        <Viewer fileUrl="/assets/hostel/teja-hostel.pdf" plugins={[defaultLayoutPluginInstance]} />
                    </div>
                </Worker>
            </div>
        </Layout>
    )
}
