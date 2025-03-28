import PropertyOverlay from "./property-overlay"
import RecommendItems from "./RecommendItems"

const Main = () => {
  return (
    <>
      <div className="relative flex justify-center items-center flex-col">
        <div className="w-full sm:max-w-full flex justify-center items-center   h-[569px] bg-cover bg-center " style={{
          backgroundImage: "url('https://s3-alpha-sig.figma.com/img/2166/569c/025784029df0a6b745e6bcb400f1a436?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=ZCknXs8~KQeCnLQUziZetdkV371f69ROxI6FYMAiQRsghjPYVdRHDBlCy1x6wmazWIztGLxZJVlqTIiiytS1ZAJetexmuQtjwsLBikrkscggs7Dl-ksgqJN8BFjWYNmqJLllElcIjFnEY2Kd4FUdjyS26utogyIXBAVAAlNqY2DaRWueS3P-csEUjbrAnzejBpsFO-b8xRX~F1aazUHQMVz8hzF2jyXvWDhjJHox-ybGXP48kb51-yUZAYtFxCzW6Ddy4GllWAhmAya7QHaZbAJXmWaWIXmcCyRxEZQCRzgO570556Ja-Bka1c2P1fu5ENvp4W8kN5tlnVi1Xbq5WA__')"
        }} >

          <PropertyOverlay />

          <div className="hidden sm:block sm:absolute sm:top-[90%]">
            <ul className="flex justify-center items-center space-x-2">
              {
                [1, 2, 3, 4, 5].map((_, index) => (
                  <li key={index} className="w-2 h-2 rounded-full bg-white"></li>
                ))
              }
            </ul>
          </div>

        </div>

      </div>

      <RecommendItems /></>
  )
}

export default Main