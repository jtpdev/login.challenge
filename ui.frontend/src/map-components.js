import CustomClasses from './components/CustomClasses/CustomClasses'
import Text from './components/Text/Text'
import AppPage from './components/Page/AppPage'
import CheckBox from './components/Checkbox/Checkbox'
import Select from './components/Select/Select'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Image from './components/Image/Image'
import Main from './components/Main/Main'
import Multifield from './components/Multifield/Multifield'

import Home from './views/Home/Home'
import Error from './views/Error/Error'
import Login from './views/Login/Login'
import Profile from './views/Profile/Profile'
import Search from './views/Search/Search'
import Wrapper from './views/Wrapper/Wrapper'

import {
  withComponentMappingContext,
  AllowedComponentsContainer,
  MapTo
} from '@mavice/aem-vue-editable-components'

MapTo('vue/components/page')(withComponentMappingContext(AppPage))

// Custom EditConfig for General New Vue Components
const EditConfig = {
  emptyLabel: 'Empty',

  isEmpty: function (props) {
    return !props
  }
}
/** *******************************************************************
              ↓  NEW COMPONENTS MAPPING COME HERE  ↓
**********************************************************************/

MapTo('vue/components/customclasses')(CustomClasses, EditConfig)

// Select Component Mapping
MapTo('vue/components/select')(Select, EditConfig)

// Checkbox Component Mapping
MapTo('vue/components/checkbox')(CheckBox, EditConfig)

// Header Component Mapping
MapTo('vue/components/header')(Header, EditConfig)

// Header Component Mapping
MapTo('vue/components/main')(Main, EditConfig)

// Footer Component Mapping
MapTo('vue/components/footer')(Footer, EditConfig)

// Multifield Component Mapping
MapTo('vue/components/multifield')(Multifield, EditConfig)

// Home Component Mapping
MapTo('vue/components/home')(Home, EditConfig)

// Error Component Mapping
MapTo('vue/components/error')(Error, EditConfig)

// Login Component Mapping
MapTo('vue/components/login')(Login, EditConfig)

// Profile Component Mapping
MapTo('vue/components/profile')(Profile, EditConfig)

// Search Component Mapping
MapTo('vue/components/search')(Search, EditConfig)

// Wrapper Component Mapping
MapTo('vue/components/wrapper')(Wrapper, EditConfig)

// Image Component Mapping
MapTo('vue/components/image')(Image, {
  emptyLabel: 'Image',
  isEmpty: function (props) {
    return !props || !props.src || props.src.trim().length < 1
  },
  resourceType: 'vue/components/image'
})

// Text Component Mapping
MapTo('vue/components/text')(Text, {
  emptyLabel: 'Text',

  isEmpty: function (props) {
    return !props || !props.text || props.text.trim().length < 1
  }
})

// Container Component Mapping
MapTo('vue/components/container')(
  withComponentMappingContext(AllowedComponentsContainer),
  {
    emptyLabel: 'Container',

    isEmpty: function (props) {
      return !props || !props.cqItemsOrder || props.cqItemsOrder.length === 0
    }
  }
)
