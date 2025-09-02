/* eslint-disable react/no-unescaped-entities */
import DefaultLayout from "@/components/Layout";
import React from "react";
import "@/styles/css/elegant-icons.min.css";
import "@/styles/css/all.min.css";
import "@/styles/css/animate.css";
import "@/styles/css/default.css";
import "@/styles/css/responsive.css";
import NewsLatter from "@/components/common-section/NewsLatter";
import Link from "next/link";
const Typography = () => {
  return (
    <DefaultLayout>
      <>
  <div className="breadcrumb_area_three">
   
    <div className="container">
      <div className="breadcrumb_text">
        <h2>
          Hello! here is <span>Typography</span>
        </h2>
        <p>
          Banca has the nice typography settings by default, if needed you can <br/>
          customize any of the elements font you can see in this page really
          easily from the theme options.
        </p>
      </div>
    </div>
  </div>
  <section className="typography_area">
    <div className="container">
      <div className="row">
        <div className="col-lg-4 col-md-6">
          <div className="heading_content">
            <h5 className="h5 regular t_title">Bold Heading</h5>
            <div className="typography_preview">
              <h1 className="h1 bold">Heading one</h1>
              <h2 className="h2 bold">Heading two</h2>
              <h3 className="h3 bold">Heading three</h3>
              <h4 className="h4 bold">Heading four</h4>
              <h5 className="h5 bold">Heading five</h5>
              <h6 className="h6 bold">Heading six</h6>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="heading_content">
            <h5 className="h5 regular t_title">Medium Heading</h5>
            <div className="typography_preview">
              <h1 className="h1 medium">Heading one</h1>
              <h2 className="h2 medium">Heading two</h2>
              <h3 className="h3 medium">Heading three</h3>
              <h4 className="h4 medium">Heading four</h4>
              <h5 className="h5 medium">Heading five</h5>
              <h6 className="h6 medium">Heading six</h6>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="heading_content">
            <h5 className="h5 regular t_title">Regular Heading</h5>
            <div className="typography_preview">
              <h1 className="h1 regular">Heading one</h1>
              <h2 className="h2 regular">Heading two</h2>
              <h3 className="h3 regular">Heading three</h3>
              <h4 className="h4 regular">Heading four</h4>
              <h5 className="h5 regular">Heading five</h5>
              <h6 className="h6 regular">Heading six</h6>
            </div>
          </div>
        </div>
      </div>
      <div className="typography_underline">
        <h4 className="h4 medium">Heading with Underline</h4>
        <p>
          Oxford easy peasy he nicked it A bit of how's your father hotpot
          excuse my French burke gutted mate, argy-bargy in my flat tosser the
          BBC bevvy get stuffed mate. The little rotter it's all gone to pot
          ruddy cracking goal nancy boy bits and bobs tomfoolery spiffing good
          time zonked bum bag baking cakes butty, blower you mug crikey Queen's
          English cor blimey guvnor loo bite your arm off amongst boot gosh
          sloshed say, mufty tinkety tonk old fruit faff about cheers young
          delinquent pukka matie boy off his nut what a plonker pardon you.
        </p>
      </div>
      <div className="highlight_text">
        <h5 className="h5 regular">Highlights</h5>
        <p>
          Lost the plot crikey my lady such a fibber what a plonker nice one
          have it cup of tea mush bubble and squeak, bobby zonked brilliant
          young delinquent chinwag codswallop loo car boot,{" "}
          <span className="h_black">tickety-boo victoria sponge bender</span>{" "}
          blag old at public school owt to do with me lemon squeezy. Bamboozled
          starkers knees up owt to do with me bite your arm off Eaton what a
          plonker Charles daft{" "}
          <span className="h_green">Why you mug old, bubble and squeak</span>{" "}
          cracking goal bodge bonnet me old mucker say smashing spiffing good
          time cobblers blatant. Richard super me old mucker tomfoolery wellies
          starkers twit barney pear shaped cheeky, bugger cup of char bender
          grub posh a load of old tosh pukka haggle plastered, what a load of
          rubbish Jeffrey hunky-dory up the duff nice one fantastic bog
          Elizabeth. <span className="h_blue">Knackered I spiffing good</span>{" "}
          time easy peasy pear shaped hotpot up the kyver cheesed off,
          bog-standard blower I don't want no agro tosser the little rotter
          chinwag cor blimey guvnor jolly good.
        </p>
      </div>
      <div className="highlight_text">
        <h5 className="h5 regular">Text Tooltips</h5>
        <p>
          He nicked it chip shop argy-bargy brilliant get stuffed mate
          absolutely bladdered smashing,{" "}
          <span
            className="tooltips_one"
            data-toggle="tooltip"
            data-placement="top"
            title="Your text here"
          >
            vagabond codswallop tosser
          </span>{" "}
          hunky-dory cheers in my flat bite your arm off, cracking goal up{" "}
          <span
            className="tooltips_two"
            data-toggle="tooltip"
            data-placement="top"
            title="Editar"
          >
            the duff cheeky bugger zonked why
          </span>
          . Burke cras Richard grub say bits and bobs mush my lady tinkety tonk
          old fruit crikey fantastic vagabond, sloshed blower barney bender is
          bobby you mug daft argy-bargy.
        </p>
      </div>
      <div className="row dropcap_inner">
        <div className="col-lg-5">
          <div className="dropcap_content">
            <h5 className="h5 regular">Big Text Dropcap</h5>
            <p>
              <span>K</span> aking cakes buggered my lady up the duff ummm I'm
              telling skive off Richard Oxford it's all gone to pot lavatory
              codswallop I don't get shirty with me, lost the plot up the kyver
              plastered mufty the full monty bleeding tosser cheeky what a load
              of rubbish excuse my french.!
            </p>
          </div>
        </div>
        <div className="col-lg-5 offset-lg-2">
          <div className="dropcap_content">
            <h5 className="h5 regular">Rectangle Dropcap</h5>
            <p>
              <span className="r_dropcap">A</span> aking cakes buggered my lady
              up the duff ummm I'm telling skive off Richard Oxford it's all
              gone to pot lavatory codswallop I don't get shirty with me, lost
              the plot up the kyver plastered mufty the full monty bleeding
              tosser cheeky what a load of rubbish excuse my french.!
            </p>
          </div>
        </div>
      </div>
      <div className="row typography_list">
        <div className="col-lg-5 col-md-6">
          <h5 className="h5 regular">Unordered Lists (Nested)</h5>
          <ul className="list-unstyled unorderlist">
            <li>
              <Link href="#">Option panel</Link >
              <ul className="list-unstyled">
                <li>
                  <Link href="#">Incredible Support</Link >
                  <ul className="list-unstyled">
                    <li>
                      <Link href="#">Life time Update</Link >
                    </li>
                    <li>
                      <Link href="#">Unlimited Colors</Link >
                    </li>
                    <li>
                      <Link href="#">Translation Ready</Link >
                    </li>
                  </ul>
                </li>
                <li>
                  <Link href="#">List item two</Link >
                </li>
                <li>
                  <Link href="#">List item three</Link >
                </li>
              </ul>
            </li>
            <li>
              <Link href="#">Option panel</Link >
            </li>
            <li>
              <Link href="#">Easy to Customize</Link >
            </li>
            <li>
              <Link href="#">User Friendly</Link >
            </li>
            <li>
              <Link href="#">Incredible Support</Link >
            </li>
            <li>
              <Link href="#">Customize</Link >
            </li>
          </ul>
          <div className="steps-panel">
            <ul className="ordered-list">
              <li>
                Go to{" "}
                <span className="direction_steps">
                  <span className="direction_step">Banca Settings</span>
                  <span className="direction_step">Header</span>{" "}
                  <span className="direction_step">Logo</span>{" "}
                </span>
              </li>
              <li>Consectetur adipiscing elit</li>
              <li>Integer molestie lorem at massa</li>
              <li>Facilisis in pretium nisl aliquet</li>
            </ul>
          </div>
        </div>
        <div className="col-lg-7 col-md-6">
          <h5 className="h5 regular">Ordered Lists (Nested)</h5>
          <ol>
            <li>
              <Link href="#">Option panel</Link >
              <ol>
                <li>
                  <Link href="#">Incredible Support</Link >
                  <ol>
                    <li>
                      <Link href="#">Life time Update</Link >
                    </li>
                    <li>
                      <Link href="#">Unlimited Colors</Link >
                    </li>
                    <li>
                      <Link href="#">Translation Ready</Link >
                    </li>
                  </ol>
                </li>
                <li>
                  <Link href="#">List item two</Link >
                </li>
                <li>
                  <Link href="#">List item three</Link >
                </li>
              </ol>
            </li>
            <li>
              <Link href="#">Option panel</Link >
            </li>
            <li>
              <Link href="#">Easy to Customize</Link >
            </li>
            <li>
              <Link href="#">User Friendly</Link >
            </li>
            <li>
              <Link href="#">Incredible Support</Link >
            </li>
            <li>
              <Link href="#">Customize</Link >
            </li>
          </ol>
          <div className="steps-panel">
            <ol className="ordered-list order_list2">
              <li>
                Go to{" "}
                <span className="direction_steps">
                  <span className="direction_step">Banca Settings</span>
                  <span className="direction_step">Header</span>{" "}
                  <span className="direction_step">Logo</span>{" "}
                </span>
              </li>
              <li>Consectetur adipiscing elit</li>
              <li>Integer molestie lorem at massa</li>
              <li>Facilisis in pretium nisl aliquet</li>
            </ol>
          </div>
        </div>
      </div>
      <div className="blockquote_inner">
        <h4 className="h4">Blockquote</h4>
        <blockquote className="blockquote">
          <p className="mb-0">
            Sloshed porkies it's your round bugger up the kyver say buggered
            cheeky bugger in my flat, say chinwag bobby blow off squiffy bleeder
            quaint spiffing owt to do with me, brilliant chimney pot excuse my
            French daft bog-standard lemon squeezy cheers. In my flat cup of tea
            cracking goal tinkety tonk old fruit pukka car boot fantastic golly
            gosh.!
          </p>
        </blockquote>
        <h6 className="h6 regular">Single line blockquote:</h6>
        <blockquote className="blockquote_two">
          <h5 className="mb-0 h5">
            <span className="quote_icon">,,</span>Stay Hungry. Stay foolish.
          </h5>
        </blockquote>
        <h6 className="h6 regular">
          Multi line blockquote with a cite reference:
        </h6>
        <blockquote className="blockquote_two">
          <h5 className="mb-0 h5">
            <span className="quote_icon">,,</span>The HTML{" "}
            <span>&lt;blockquote&gt;</span> Element (or HTML Block Quotation
            Element) indicates that the enclosed text is an extended quotation.
            Usually, this is rendered visually by indentation (see Notes for how
            to change it). A URL for the source of the quotation may be given
            using the cite attribute, while a text representation of the source
            can be given using the <span>&lt;cite&lt;</span> element.
          </h5>
        </blockquote>
      </div>
      <div className="button_inner">
        <h4 className="h4">All Button Style</h4>
        <h6 className="h6 m-0">Button sizes</h6>
        <div className="button_inner_one">
          <Link href="#" className="action_btn btn_small">
            Banca
          </Link >
          <Link href="#" className="action_btn btn_small_two">
            Banca
          </Link >
          <Link href="#" className="action_btn btn_small_three">
            Banca
          </Link >
          <Link href="#" className="action_btn btn_bg">
            Banca
          </Link >
          <Link href="#" className="action_btn btn_radious_none">
            Banca
          </Link >
          <Link href="#" className="action_btn btn_radious_45">
            Banca
          </Link >
        </div>
      </div>
      <div className="button_inner">
        <h6 className="h6 m-0">Button border sizes</h6>
        <div className="button_inner_one">
          <Link href="#" className="doc_border_btn btn_small">
            Docs
          </Link >
          <Link href="#" className="doc_border_btn btn_small_two">
            Banca
          </Link >
          <Link href="#" className="doc_border_btn doc_border_btn_two">
            Banca
          </Link >
          <Link href="#" className="doc_border_btn btn_bg">
            Banca
          </Link >
          <Link href="#" className="doc_border_btn btn_radious_none">
            Banca
          </Link >
          <Link href="#" className="doc_border_btn btn_radious_45">
            Banca
          </Link >
        </div>
      </div>
      <div className="button_inner">
        <h6 className="h6 m-0">Button with icon</h6>
        <div className="button_inner_one">
          <Link className="nav_btn icon_btn docy_login_btn" href="#">
            <i className="icon_profile" />
            Log In
          </Link >
          <Link href="#" className="doc_border_btn arrow_btn_medium">
            View All Docs
            <i className="arrow_right" />
          </Link >
          <Link href="#" className="doc_border_btn arrow_btn_big">
            Live Chat Now
            <i className="icon_chat_alt" />
          </Link >
          <Link className="nav_btn icon_btn arrow_btn_small" href="#">
            <i className="icon_house_alt" />
            View All Docs
          </Link >
          <Link className="nav_btn icon_btn arrow_btn_small_two" href="#">
            <i className="icon_documents_alt" />
            All Docs
          </Link>
        </div>
      </div>
    </div>
  </section>
  <NewsLatter/>
</>

    </DefaultLayout>
  );
};

export default Typography;
