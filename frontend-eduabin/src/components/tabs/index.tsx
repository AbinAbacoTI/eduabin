// eslint-disable-next-line no-use-before-define
import * as React from 'react'
import PropTypes from 'prop-types'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import CardCourse from 'components/Cards/CardCourse'

function TabPanel (props) {
  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  )
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired
}

function a11yProps (index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`
  }
}

export default function VerticalTabs () {
  const [value, setValue] = React.useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <Box
      sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: 224 }}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: 'divider' }}
      >
        <Tab label="Editar Perfil" {...a11yProps(0)} />
        <Tab label="Mis Cursos" {...a11yProps(1)} />
        <Tab label="Eliminar cuenta" {...a11yProps(2)} />
      </Tabs>
      <TabPanel value={value} index={0}>
      <div className="w-auto m-auto py-3 px-1">
        <p className="text-4xl">Información de la Cuenta</p>
        <br></br>
        <div className="mb-6">
          <label
            htmlFor="name"
            className="block mb-2 text-lg font-medium text-gray-900 dark:text-gray-300 w-6/12"
          >
            Nombre de Usuario
          </label>
          <input
            type="name"
            id="name"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light w-full"
          ></input>
        </div>
        <div className="mb-6">
          <label
            htmlFor="email"
            className="block mb-2 text-lg font-medium text-gray-900 dark:text-gray-300"
          >
            Correo Electrónico
          </label>
          <input
            type="email"
            id="email"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light w-full"
            placeholder="name@gmail.com"
          ></input>
        </div>
        <div className="mb-6">
          <label
            htmlFor="phone"
            className="block mb-2 text-lg font-medium text-gray-900 dark:text-gray-300 w-6/12"
          >
            Número de Celular
          </label>
          <input
            type="phone"
            id="phone"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light w-full"
          ></input>
        </div>
        <div className="mb-6">
          <label
            htmlFor="password"
            className="block mb-2 text-lg font-medium text-gray-900 dark:text-gray-300 w-6/12"
          >
            Contraseña
          </label>
          <input
            type="password"
            id="password"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light w-full"
          ></input>
        </div>
        <button
          type="submit"
          className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-lg px-5 py-2.5 text-center dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800 w-6/12"
        >
          Guardar Cambios
        </button>
      </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
      <div className='h-full py-3 relative z-1 flex items-center justify-center'>
      <div className='col-span-3 grid grid-cols-3 gap-2'>
                <CardCourse/>
                <CardCourse/>
                <CardCourse/>
                </div>
                </div>
      </TabPanel>
      <TabPanel value={value} index={2}>
      <div className="w-auto m-auto py-3 px-1">
      <p className="text-3xl align-center">¿Desea eliminar la cuenta?</p>
        <div className="flex items-center justify-around h-full border-2 py-3">
          <button
          type="submit"
          className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800 w-3/12"
        >
          SI
        </button>
        <button
          type="submit"
          className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800 w-3/12"
        >
          NO
        </button>
        </div>
        </div>
      </TabPanel>
    </Box>
  )
}
