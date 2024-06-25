import { Form } from 'react-router-dom'

const WebsiteForm = () => {
    return (
        <>
                <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl"><span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">Ajouter un website</span> Pour ce Magasin</h1>
            <Form method='post'>
                <input name='websiteUrl' style={{
                    border: '2px solid #a9a9cf',
                    borderRadius: '10px',
                    padding: '5px 5px'
                }}
                    id="websiteUrl" defaultValue="www.google.com" />
                <button type='submit'  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Ajouter un website</button>
                </Form>
        </>
    )
}

export default WebsiteForm