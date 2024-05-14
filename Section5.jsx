import nike from './assets/NikeLogo.png'
import gucci from './assets/gucci.png'
import lv from './assets/lv.png'
import adidas from './assets/adidas.png'
import skechers from './assets/Skechers-logo.png'
import './Section5.css'

export default function Section5(){
    return(
        <div id="sec5">
            <div id="inside1">
                <h2>Monthly News Letter</h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis maiores inventore at, doloribus libero mollitia soluta aliquam accusantium aspernatur nobis quibusdam, temporibus placeat fugiat. Dolorum quas adipisci dignissimos magnam quos?</p>
            </div>
            <div id="inside2">
                <form>
                    <input type="email" placeholder="Please enter your email" id="i1"></input>
                    <input type="submit" value="save" id="i2"></input>
                    <h2> Top brands Collections</h2>
                    <div class="flex1">
                        <div><img src={nike}></img></div>
                        <div><img src={gucci}></img></div>
                        <div><img src={lv}></img></div>
                        <div><img src={adidas}></img></div>
                        <div><img src={skechers}></img></div>
                    </div>
                </form>
            </div>
        </div>
    )
}