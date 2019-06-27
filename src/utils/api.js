import dayjs from 'dayjs'

const BASE_URL='https://api.canillitapp.com'

const getActualDate = () => dayjs().format('YYYY[-]MM[-]DD')

const api = {
    latest: async (date= getActualDate() ) => {
        try {
            const response = await fetch(`${BASE_URL}/latest/${date}`)
            const data = await response.json()

            return data
        } catch (error) {
            console.log(error)
        }
    }, 
    category: async (categoryId = '' ) => {
        try {
            const response = await fetch(`${BASE_URL}/news/category/${categoryId}`)
            const data = await response.json()

            return data
        } catch (error) {
            console.log(error)
        }
    }, 
    search: async (term = '' ) => {
        try {
            const response = await fetch(`${BASE_URL}/search/${term}`)
            const data = await response.json()


            return data
        } catch (error) {
            console.log(error)
        }
    }
}




export default api