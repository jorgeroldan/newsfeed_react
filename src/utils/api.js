import dayjs from 'dayjs'

const BASE_URL='https://api.canillitapp.com'

const getActualDate = () => dayjs().format('YYYY[-]MM[-]DD')



const api = {
    latest: async (date= getActualDate() ) => {
        console.log('date', date)
        try {
            const response = await fetch(`${BASE_URL}/latest/${date}`)
            const data = await response.json()

            return data
        } catch (error) {
            console.log(error)
        }
    }
}



export default api