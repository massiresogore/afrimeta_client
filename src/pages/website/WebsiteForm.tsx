import { Form } from 'react-router-dom'

const WebsiteForm = () => {
    return (
        <>
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