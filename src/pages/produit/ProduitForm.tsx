import { Form } from 'react-router-dom'

const ProduitForm = () => {
    return (
        <>
        <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl"><span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">Ajouter Produit</span> Pour ce Website</h1>

            <Form method='post' encType='multipart/form-data'>
                <input name='titre' style={{
                    border: '2px solid #a9a9cf',
                    borderRadius: '10px',
                    padding: '5px 5px'
                }}
                    id="titre" defaultValue="titre" />
                <input name='description' style={{
                    border: '2px solid #a9a9cf',
                    borderRadius: '10px',
                    padding: '5px 5px'
                }}
                    id="description" defaultValue="description" />
                <input name='prix'
                    defaultValue="prix"
                    style={{
                        border: '2px solid #a9a9cf',
                        borderRadius: '10px',
                        padding: '5px 5px'
                    }}
                    id="prix" />
                <input name='quantiteStock'
                    defaultValue="quantiteStock"
                    style={{
                        border: '2px solid #a9a9cf',
                        borderRadius: '10px',
                        padding: '5px 5px'
                    }}
                    id="quantiteStock" />
                <input
                    name='image'
                    type='file'
                    style={{
                        border: '2px solid #a9a9cf',
                        borderRadius: '10px',
                        padding: '5px 5px'
                    }}
                    id="image" />
                <button type='submit'  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Ajouter produit</button>
            </Form>
        </>
    )
}

export default ProduitForm