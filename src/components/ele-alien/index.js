/*
 * @Description: 加载组件
 * @Author: Cary
 * @Date: 2019-06-04 13:45:07
 */
import CCScrollbar from './CCScrollbar'
import ConfirmBox from './ConfirmBox'
import CCLine from './CCLine'
import Breadcrumb from './Breadcrumb'
import VueAudio from './VueAudio'
import ConfirmBtn from './ConfirmBtn'
import CCBtn from './CCBtnTip'
import CTiele from './Title'
import CPhotoPreview from './CPhotoPreview'
import CSuperTool from './CSuperTool'
import CSuperToolV2 from './CSuperTool/index-v2.vue'
import CSuperTable from './CSuperTable'
import CSuperQuery from './CSuperQuery'
import CSelectPage from './CSelectPage'
import CTreeSelect from './CTreeSelect'
import CSuperForm from './CSuperForm'
import CSuperUpload from './CSuperUpload'
import CLayout from './CLayout'
import CLayoutPanel from './CLayout/component/CLayoutPanel'
import Ctips from './Ctips'
import CBaseDialog from './CBaseDialog'
import CTagSelect from './CTagSelect'
import CDialog from './CDialog'
import CContainer from './CContainer'
import CDeltip from './CDeltip'
import Spot from './spot'
import DictSelect from './DictSelect'
import IconSelect from './IconSelect'
export default {
  install(vue, ops) {
    vue.component('cc-scrollbar', CCScrollbar)
    vue.component('Breadcrumb', Breadcrumb)
    vue.component('VueAudio', VueAudio)
    vue.component('cc-line', CCLine)
    vue.component('c-btn-tip', CCBtn)
    vue.component('ConfirmBtn', ConfirmBtn)
    vue.component('CTiele', CTiele)
    vue.component('CPhotoPreview', CPhotoPreview)
    vue.component('CSuperTool', CSuperTool)
    vue.component('CSuperToolV2', CSuperToolV2)
    vue.component('CSuperTable', CSuperTable)
    vue.component('CSuperQuery', CSuperQuery)
    vue.component('CSelectPage', CSelectPage)
    vue.component('CTreeSelect', CTreeSelect)
    vue.component('CSuperForm', CSuperForm)
    vue.component('CSuperUpload', CSuperUpload)
    vue.component('CLayout', CLayout)
    vue.component('CLayoutPanel', CLayoutPanel)
    vue.component('CBaseDialog', CBaseDialog)
    vue.component('CTagSelect', CTagSelect)
    vue.component('CContainer', CContainer)
    vue.component('CDeltip', CDeltip)
    vue.component('CSpot', Spot)
    vue.component('DictSelect', DictSelect)
    vue.component('IconSelect', IconSelect)
    vue.prototype.$confirmBox = ConfirmBox.confirmBox
    vue.prototype.$ctips = Ctips.getInstance(vue)
    vue.prototype.$CDialog = CDialog
  }
}
