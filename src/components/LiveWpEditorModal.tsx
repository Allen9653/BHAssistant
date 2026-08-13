import React, { useState } from 'react';
import { CompanyDetails } from '../types';
import { Settings, Save, CheckCircle2, X, Copy, Code, Layers } from 'lucide-react';

interface LiveWpEditorModalProps {
  isOpen: boolean;
  onClose: () => void;
  companyInfo: CompanyDetails;
  onUpdateCompanyInfo: (updated: CompanyDetails) => void;
}

export const LiveWpEditorModal: React.FC<LiveWpEditorModalProps> = ({
  isOpen,
  onClose,
  companyInfo,
  onUpdateCompanyInfo,
}) => {
  const [activeTab, setActiveTab] = useState<'info' | 'wpcode'>('info');
  const [codeMode, setCodeMode] = useState<'preoblikovani' | 'prvobitni'>('preoblikovani');
  const [formData, setFormData] = useState<CompanyDetails>({ ...companyInfo });
  const [saved, setSaved] = useState(false);
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    onUpdateCompanyInfo(formData);
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  const wpCodePreoblikovani = `<div class="dslc-modules-section dslc-full" style="padding-top:58px;padding-bottom:58px;padding-left:5%;padding-right:5%;background-color:#0F2038;color:#F5F0E8;" data-section-id="b3906a95f22">
  <div class="dslc-modules-section-wrapper dslc-clearfix">
    <div class="dslc-modules-area dslc-col dslc-12-col dslc-last-col">
      <!-- B&H ASSISTANT D.O.O. GLAVNI WP ZAGLAVLJE -->
      <div style="text-align:center; margin-bottom: 40px;">
        <h1 style="color:#00C9A7; font-family:'Syne', sans-serif; font-size:32px; font-weight:800; margin-bottom:10px;">
          B&H ASSISTANT d.o.o. Sarajevo
        </h1>
        <p style="color:#C9A84C; font-family:monospace; font-size:16px;">
          Inovativne AI Stranice, Digitalni Alati, Izdavaštvo i Bosanskohercegovačka Kulturna Baština
        </p>
      </div>

      <!-- DIGITALNI ALATI I PROJEKTI GRID -->
      <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap:24px; margin-bottom:40px;">
        <!-- BH KONVER -->
        <div style="background:#0A1628; border:1px solid #00C9A7; padding:24px; border-radius:16px;">
          <h3 style="color:#F5F0E8; font-size:20px; font-weight:bold; margin-bottom:8px;">BH KONVER - Pametni AI Konverter</h3>
          <p style="color:#a8a8a8; font-size:14px; margin-bottom:16px;">Pretvaranje i obrada valuta, jedinica i dokumenata prilagođeno za BiH tržište.</p>
          <a href="https://bh-assistant.ba" target="_blank" style="display:inline-block; background:#00C9A7; color:#0A1628; padding:10px 20px; font-weight:bold; border-radius:8px; text-decoration:none;">Otvori Alat</a>
        </div>

        <!-- BH PAPIRFINDER -->
        <div style="background:#0A1628; border:1px solid #C9A84C; padding:24px; border-radius:16px;">
          <h3 style="color:#F5F0E8; font-size:20px; font-weight:bold; margin-bottom:8px;">BH PAPIRFINDER - Vodič kroz Birokratu</h3>
          <p style="color:#a8a8a8; font-size:14px; margin-bottom:16px;">Pretraga javne administracije, obrazaca i taksi u Bosni i Hercegovini.</p>
          <a href="https://bh-assistant.ba" target="_blank" style="display:inline-block; background:#C9A84C; color:#0A1628; padding:10px 20px; font-weight:bold; border-radius:8px; text-decoration:none;">Istraži Papire</a>
        </div>

        <!-- SCENA+ MAGAZIN -->
        <div style="background:#0A1628; border:1px solid #E35D58; padding:24px; border-radius:16px;">
          <h3 style="color:#F5F0E8; font-size:20px; font-weight:bold; margin-bottom:8px;">SCENA+ - Urbani Magazin</h3>
          <p style="color:#a8a8a8; font-size:14px; margin-bottom:16px;">Izdavaštvo, kulturna scena, print izdanja i digitalna arhiva za bh. umjetnost.</p>
          <a href="https://bh-assistant.ba" target="_blank" style="display:inline-block; background:#E35D58; color:#ffffff; padding:10px 20px; font-weight:bold; border-radius:8px; text-decoration:none;">Čitaj SCENA+</a>
        </div>
      </div>

      <!-- KONTAKT I DIREKTNI PODACI FIRME -->
      <div style="background:#0A1628; border:1px dashed #00C9A7; padding:30px; border-radius:20px; text-align:center;">
        <h4 style="color:#00C9A7; font-size:18px; margin-bottom:12px;">Sjedište i Pravni Podaci B&H ASSISTANT d.o.o.</h4>
        <p style="color:#F5F0E8; font-size:14px; line-height:1.8;">
          <strong>Adresa:</strong> Envera Šehovića 11, 71000 Sarajevo, BiH<br/>
          <strong>JIB:</strong> 4203248380001 | <strong>MBS:</strong> 65-01-0174-24<br/>
          <strong>E-mail:</strong> info@bh-assistant.ba | <strong>Telefon:</strong> +387 62 123 456
        </p>
      </div>
    </div>
  </div>
</div>`;

  const wpCodePrvobitni = `<div class="dslc-modules-section dslc-valign- dslc-halign- dslc-init-parallax dslc-full" style="padding-top:58px;padding-bottom:58px;padding-left:5%;padding-right:5%;background-color:#f7f6f4;background-repeat:no-repeat;background-position:center bottom;background-attachment:parallax;border-top-style: hidden; border-right-style: hidden; border-bottom-style: hidden; border-left-style: hidden;" data-section-id="b3906a95f22">
	<div class="dslc-bg-video dslc-force-show"><div class="dslc-bg-video-overlay" style=""></div></div>
	<div class="dslc-section-divider" data-divider-pos="top" data-divider-style=""></div>
	<div class="dslc-section-divider" data-divider-pos="bottom" data-divider-style=""></div>
	<div class="dslc-modules-section-wrapper dslc-clearfix">
		<div class="dslc-modules-area dslc-col dslc-12-col dslc-last-col dslc-valign- dslc-halign-" data-size="12" data-valign="" data-modules-area-id="44f85802e51">
			<style type="text/css" id="dslca-modules-area-44f85802e51">.dslc-modules-area[data-modules-area-id="44f85802e51"] {:px;margin-bottom:0px;:px;background-repeat:repeat;background-position:left top;background-attachment:scroll;background-size:auto;border-width:0px;border-style:solid;}</style>
			<div id="dslc-module-46" class="dslc-module-front dslc-module-DSLC_Projects dslc-in-viewport-check dslc-in-viewport-anim-none dslc-col dslc-12-col dslc-last-col dslc-module-handle-like-regular" data-module-id="46" data-module="DSLC_Projects" data-dslc-module-size="12" data-dslc-anim="none" data-dslc-anim-delay="0" data-dslc-anim-duration="650" data-dslc-anim-easing="ease" data-dslc-preset="none">
				<style type="text/css" id="css-for-dslc-module-46">@import url("//fonts.googleapis.com/css?family=Port+Lligat+Slab:100,200,300,400,500,600,700,800,900&subset=latin,latin-ext"); @import url("//fonts.googleapis.com/css?family=Pontano+Sans:100,200,300,400,500,600,700,800,900&subset=latin,latin-ext"); @import url("//fonts.googleapis.com/css?family=Dosis:100,200,300,400,500,600,700,800,900&subset=latin,latin-ext"); @import url("//fonts.googleapis.com/css?family=PT+Sans:100,200,300,400,500,600,700,800,900&subset=latin,latin-ext"); #dslc-module-46 {} #dslc-module-46 .dslc-projects{margin-top:0px;margin-bottom:0px;margin-left:0px;margin-right:0px;min-height:0px;} #dslc-module-46 .dslc-post-separator{margin-bottom:32px;padding-bottom:32px;border-color:#ededed;border-bottom-width:1px;border-style:dashed;} #dslc-module-46 .dslc-project-thumb{text-align:left ;margin-top:0px;margin-bottom:0px;margin-left:0px;margin-right:0px;} #dslc-module-46 .dslc-project-thumb-inner{padding-top:0px;padding-bottom:0px;padding-left:0px;padding-right:0px;} #dslc-module-46 .dslc-project-thumb-inner,#dslc-module-46 .dslc-project-thumb,#dslc-module-46 .dslc-project-thumb img{border-top-left-radius:0px;border-top-right-radius:0px;border-bottom-left-radius:0px;border-bottom-right-radius:0px;} #dslc-module-46 .dslc-post-thumb{width:100%;} #dslc-module-46 .dslc-project-main{background-color:#ffffff ;min-height:0px;padding-top:36px;padding-bottom:36px;padding-left:29px;padding-right:29px;text-align:center ;border-color:#f0eeeb;border-width:1px;border-style:none none solid none;} #dslc-module-46 .dslc-post{border-top-left-radius:0px;border-top-right-radius:0px;border-bottom-left-radius:0px;border-bottom-right-radius:0px;} #dslc-module-46 .dslc-project-main-inner{margin-top:0px;margin-bottom:0px;margin-left:0px;margin-right:0px;width:100%;} #dslc-module-46 .dslc-project-title h2 a{color:#4f4f4f ;} #dslc-module-46 .dslc-project-title h2,#dslc-module-46 .dslc-project-title h2 a{font-size:17px;font-weight:500;font-family:"Port Lligat Slab";line-height:12px;letter-spacing:0px;} #dslc-module-46 .dslc-project-title{margin-top:10px;margin-bottom:15px;margin-left:10px;margin-right:10px;} #dslc-module-46 .dslc-project-title h2{text-transform:none ;} #dslc-module-46 .dslc-project-cats{font-size:12px;font-weight:400;font-family:"Pontano Sans";font-style:italic ;line-height:10px;margin-top:0px;margin-bottom:0px;margin-left:0px;margin-right:0px;} #dslc-module-46 .dslc-project-staff{color:#000000 ;font-size:12px;font-weight:400;font-style:normal ;line-height:12px;margin-top:10px;margin-bottom:10px;margin-left:10px;margin-right:10px;} #dslc-module-46 .dslc-project-partner{color:#000000 ;font-size:12px;font-weight:400;font-style:normal ;line-height:12px;margin-top:10px;margin-bottom:10px;margin-left:10px;margin-right:10px;} #dslc-module-46 .dslc-project-excerpt{color:#a8a8a8 ;font-size:15px;font-weight:400;font-family:"Dosis";margin-top:22px;margin-bottom:22px;margin-left:22px;margin-right:22px;padding-top:15px;padding-bottom:15px;padding-left:15px;padding-right:15px;border-top-color:#e0e0e0;border-top-width:1px;border-top-style:dotted;} #dslc-module-46 .dslc-project-excerpt,#dslc-module-46 .dslc-project-excerpt p{line-height:24px;} #dslc-module-46 .dslc-project-read-more a{background-color:#e35d58 ;border-radius:2px;color:#ffffff ;font-size:13px;font-weight:600;font-family:"PT Sans";padding-top:13px;padding-bottom:13px;padding-left:16px;padding-right:16px;} #dslc-module-46 .dslc-project-read-more a:hover{background-color:#c94d49 ;color:#ffffff ;} #dslc-module-46 .dslc-project-read-more{margin-top:0px;margin-bottom:0px;margin-left:0px;margin-right:0px;} #dslc-module-46 .dslc-project-read-more a svg{width:11px; height:11px;} #dslc-module-46 .dslc-project-read-more a img.dslc-button-icon-image{width:20px;} #dslc-module-46 .dslc-project-read-more a .dslc-icon,#dslc-module-46 .dslc-project-read-more a svg{color:#eb9794 ; fill:#eb9794 ;} #dslc-module-46 .dslc-project-read-more a .dslc-icon,#dslc-module-46 .dslc-project-read-more a svg,#dslc-module-46 .dslc-project-read-more a img{margin-top:5px;margin-bottom:5px;margin-left:5px;margin-right:5px;} #dslc-module-46 .dslc-module-heading h2{font-size:17px;font-weight:400;letter-spacing:0px;line-height:37px;margin-top:20px;margin-bottom:39px;margin-left:20px;margin-right:20px;} #dslc-module-46 .dslc-module-heading-view-all a{color:#e35d58 ;font-size:11px;font-weight:600;letter-spacing:0px;} #dslc-module-46 .dslc-module-heading-view-all a:hover{color:#c44c48 ;} #dslc-module-46 .dslc-module-heading-view-all{padding-top:10px;padding-bottom:10px;padding-left:10px;padding-right:10px;} #dslc-module-46 .dslc-post-filter.dslc-inactive{background-color:#ffffff ;color:#979797 ;border-color:#ebe9e2;} #dslc-module-46 .dslc-post-filter.dslc-active{background-color:#e35d58 ;color:#ffffff ;border-color:#e35d58;} #dslc-module-46 .dslc-post-filter{border-radius:0px;font-size:11px;font-weight:700;padding-top:12px;padding-bottom:12px;padding-left:12px;padding-right:12px;margin-right:10px;border-width:1px;border-style:none none solid none;} #dslc-module-46 .dslc-post-filters{text-align:left ;margin-top:20px;margin-bottom:20px;margin-left:0px;margin-right:0px;} #dslc-module-46 .dslc-carousel-nav-prev,#dslc-module-46 .dslc-carousel-nav-next{background-color:#e35d58 ;border-radius:3px;width:24px;height:24px;} #dslc-module-46 .dslc-carousel-nav-prev:hover,#dslc-module-46 .dslc-carousel-nav-next:hover{background-color:#cc524e ;} #dslc-module-46 .dslc-carousel-nav-prev span,#dslc-module-46 .dslc-carousel-nav-next span{color:#ffffff ;font-size:10px;} #dslc-module-46 .dslc-carousel-nav-prev:hover span,#dslc-module-46 .dslc-carousel-nav-next:hover span{color:#ffffff ;} #dslc-module-46 .dslc-carousel-nav{margin-top:6px;margin-right:0px;margin-bottom:20px;margin-left:0px;} #dslc-module-46 .dslc-carousel-nav-prev.position-aside,#dslc-module-46 .dslc-carousel-nav-next.position-aside{margin-top:-30px;margin-right:-30px;margin-bottom:-30px;margin-left:-30px;} #dslc-module-46 .owl-pagination .owl-page span{background-color:#b9b9b9 ;width:7px;height:7px;} #dslc-module-46 .owl-pagination .owl-page.active span{background-color:#e35d58 ;} #dslc-module-46 .owl-controls{margin-top:23px;margin-bottom:20px;margin-left:0px;margin-right:0px;} #dslc-module-46 .owl-pagination .owl-page{margin-left:3px;margin-right:3px;} #dslc-module-46 .dslc-pagination{text-align:left ;border-radius:0px;padding-top:0px;padding-bottom:0px;padding-left:0px;padding-right:0px;margin-top:30px;margin-right:0px;margin-bottom:0px;margin-left:0px;} #dslc-module-46 .dslc-pagination li.dslc-active a{background-color:#5890e5 ;color:#ffffff ;border-color:#5890e5;border-width:1px;} #dslc-module-46 .dslc-pagination li.dslc-active a:hover{background-color:#ffffff ;color:#979797 ;border-color:#e8e8e8;} #dslc-module-46 .dslc-pagination li.dslc-inactive a{background-color:#ffffff ;color:#979797 ;border-color:#e8e8e8;border-width:1px;} #dslc-module-46 .dslc-pagination li.dslc-inactive a:hover{background-color:#ffffff ;color:#979797 ;} #dslc-module-46 .dslc-pagination li a{border-radius:3px;font-size:11px;font-weight:700;letter-spacing:0px;padding-top:12px;padding-bottom:12px;padding-left:12px;padding-right:12px;} #dslc-module-46 .dslc-pagination li{margin-right:10px;} #dslc-module-46 .dslc-pagination li.dslc-pagination-load-more{display:inline-block ;} </style>
				[dslc_module_projects_output]a:633:{s:4:"size";s:2:"12";s:6:"amount";s:1:"6";s:7:"columns";s:1:"2";s:8:"elements";s:8:"filters ";s:13:"post_elements";s:42:"thumbnail title categories excerpt button ";s:31:"css_thumbnail_border_radius_top";s:1:"0";s:18:"thumb_resize_width";s:3:"261";s:21:"css_main_border_color";s:7:"#f0eeeb";s:20:"css_main_border_trbl";s:7:"bottom ";s:29:"css_main_border_radius_bottom";s:1:"0";s:15:"css_title_color";s:7:"#4f4f4f";s:19:"css_title_font_size";s:2:"17";s:21:"css_title_font_weight";s:3:"500";s:21:"css_title_font_family";s:16:"Port Lligat Slab";s:23:"css_title_margin_bottom";s:2:"15";s:18:"css_cats_font_size";s:2:"12";s:20:"css_cats_font_family";s:12:"Pontano Sans";s:22:"css_cats_margin-bottom";s:2:"18";s:24:"css_excerpt_border_color";s:7:"#e0e0e0";s:24:"css_excerpt_border_style";s:6:"dotted";s:17:"css_excerpt_color";s:7:"#a8a8a8";s:21:"css_excerpt_font_size";s:2:"15";s:23:"css_excerpt_font_family";s:5:"Dosis";s:23:"css_excerpt_line_height";s:2:"24";s:19:"css_button_bg_color";s:7:"#e35d58";s:25:"css_button_bg_color_hover";s:7:"#c94d49";s:24:"css_button_border_radius";s:1:"2";s:20:"css_button_font_size";s:2:"13";s:22:"css_button_font_weight";s:3:"600";s:22:"css_button_font_family";s:7:"PT Sans";s:14:"button_icon_id";s:18:"arrow-circle-right";s:21:"css_button_icon_color";s:7:"#eb9794";s:18:"main_heading_title";s:15:"LATEST PROJECTS";s:27:"css_main_heading_link_color";s:7:"#e35d58";s:33:"css_main_heading_link_color_hover";s:7:"#c44c48";s:33:"css_main_heading_link_padding_ver";s:1:"9";s:25:"css_heading_margin_bottom";s:2:"39";s:26:"css_filter_bg_color_active";s:7:"#e35d58";s:23:"css_filter_border_color";s:7:"#ebe9e2";s:30:"css_filter_border_color_active";s:7:"#e35d58";s:22:"css_filter_border_trbl";s:7:"bottom ";s:24:"css_filter_border_radius";s:1:"0";s:19:"css_arrows_bg_color";s:7:"#e35d58";s:25:"css_arrows_bg_color_hover";s:7:"#cc524e";s:24:"css_circles_color_active";s:7:"#e35d58";s:22:"css_circles_margin_top";s:2:"23";s:18:"module_instance_id";s:2:"46";s:9:"module_id";s:13:"DSLC_Projects";s:11:"css_show_on";s:20:"desktop tablet phone";s:10:"css_custom";s:7:"enabled";s:4:"link";s:9:"permalink";s:11:"link_target";s:5:"_self";s:4:"type";s:4:"grid";s:11:"orientation";s:8:"vertical";s:15:"pagination_type";s:8:"disabled";s:19:"categories_operator";s:2:"IN";s:7:"orderby";s:4:"date";s:5:"order";s:4:"DESC";s:6:"offset";s:1:"0";s:11:"query_alter";s:7:"enabled";s:17:"carousel_elements";s:14:"arrows circles";s:15:"css_margin_unit";s:2:"px";s:14:"css_margin_top";s:1:"0";s:17:"css_margin_bottom";s:1:"0";s:15:"css_margin_left";s:1:"0";s:16:"css_margin_right";s:1:"0";s:14:"css_min_height";s:1:"0";s:17:"separator_enabled";s:7:"enabled";s:20:"css_sep_border_color";s:7:"#ededed";s:14:"css_sep_height";s:2:"32";s:17:"css_sep_thickness";s:1:"1";s:13:"css_sep_style";s:6:"dashed";s:9:"link_type";s:8:"url_same";s:15:"css_thumb_align";s:4:"left";s:22:"css_thumb_border_color";s:7:"#e6e6e6";s:22:"css_thumb_border_width";s:1:"0";s:21:"css_thumb_border_trbl";s:21:"top right bottom left";s:34:"css_thumbnail_border_radius_bottom";s:1:"0";s:25:"css_thumbnail_margin_unit";s:2:"px";s:24:"css_thumbnail_margin_top";s:1:"0";s:27:"css_thumbnail_margin_bottom";s:1:"0";s:25:"css_thumbnail_margin_left";s:1:"0";s:26:"css_thumbnail_margin_right";s:1:"0";s:26:"css_thumbnail_padding_unit";s:2:"px";s:25:"css_thumbnail_padding_top";s:1:"0";s:28:"css_thumbnail_padding_bottom";s:1:"0";s:26:"css_thumbnail_padding_left";s:1:"0";s:27:"css_thumbnail_padding_right";s:1:"0";s:11:"thumb_width";s:3:"100";s:13:"main_location";s:6:"bellow";s:17:"css_main_bg_color";s:7:"#ffffff";s:21:"css_main_border_width";s:1:"1";s:26:"css_main_border_radius_top";s:1:"0";s:19:"css_main_min_height";s:1:"0";s:21:"css_main_padding_unit";s:2:"px";s:20:"css_main_padding_top";s:2:"36";s:23:"css_main_padding_bottom";s:2:"36";s:21:"css_main_padding_left";s:2:"29";s:22:"css_main_padding_right";s:2:"29";s:19:"css_main_text_align";s:6:"center";s:13:"main_position";s:6:"center";s:26:"css_main_inner_margin_unit";s:2:"px";s:25:"css_main_inner_margin_top";s:1:"0";s:28:"css_main_inner_margin_bottom";s:1:"0";s:26:"css_main_inner_margin_left";s:1:"0";s:27:"css_main_inner_margin_right";s:1:"0";s:20:"css_main_inner_width";s:3:"100";s:21:"css_title_line_height";s:2:"12";s:24:"css_title_letter_spacing";s:1:"0";s:21:"css_title_margin_unit";s:2:"px";s:20:"css_title_margin_top";s:2:"10";s:21:"css_title_margin_left";s:2:"10";s:22:"css_title_margin_right";s:2:"10";s:24:"css_title_text_transform";s:4:"none";s:20:"css_cats_font_weight";s:3:"400";s:19:"css_cats_font_style";s:6:"italic";s:20:"css_cats_line_height";s:2:"10";s:20:"css_cats_margin_unit";s:2:"px";s:19:"css_cats_margin_top";s:1:"0";s:22:"css_cats_margin_bottom";s:1:"0";s:20:"css_cats_margin_left";s:1:"0";s:21:"css_cats_margin_right";s:1:"0";s:15:"css_staff_color";s:7:"#000000";s:19:"css_staff_font_size";s:2:"12";s:21:"css_staff_font_weight";s:3:"400";s:20:"css_staff_font_style";s:6:"normal";s:21:"css_staff_line_height";s:2:"12";s:21:"css_staff_margin_unit";s:2:"px";s:20:"css_staff_margin_top";s:2:"10";s:23:"css_staff_margin_bottom";s:2:"10";s:21:"css_staff_margin_left";s:2:"10";s:22:"css_staff_margin_right";s:2:"10";s:17:"css_partner_color";s:7:"#000000";s:21:"css_partner_font_size";s:2:"12";s:23:"css_partner_font_weight";s:3:"400";s:22:"css_partner_font_style";s:6:"normal";s:23:"css_partner_line_height";s:2:"12";s:23:"css_partner_margin_unit";s:2:"px";s:22:"css_partner_margin_top";s:2:"10";s:25:"css_partner_margin_bottom";s:2:"10";s:23:"css_partner_margin_left";s:2:"10";s:24:"css_partner_margin_right";s:2:"10";s:18:"excerpt_or_content";s:7:"excerpt";s:24:"css_excerpt_border_width";s:1:"1";s:23:"css_excerpt_font_weight";s:3:"400";s:19:"excerpt_margin_unit";s:2:"px";s:18:"excerpt_margin_top";s:2:"22";s:21:"excerpt_margin_bottom";s:2:"22";s:19:"excerpt_margin_left";s:2:"22";s:20:"excerpt_margin_right";s:2:"22";s:14:"excerpt_length";s:2:"20";s:24:"css_excerpt_padding_unit";s:2:"px";s:23:"css_excerpt_padding_top";s:2:"15";s:26:"css_excerpt_padding_bottom";s:2:"15";s:24:"css_excerpt_padding_left";s:2:"15";s:25:"css_excerpt_padding_right";s:2:"15";s:11:"button_text";s:12:"VIEW PROJECT";s:23:"css_button_border_width";s:1:"0";s:16:"css_button_color";s:7:"#ffffff";s:22:"css_button_color_hover";s:7:"#ffffff";s:23:"css_button_padding_unit";s:2:"px";s:22:"css_button_padding_top";s:2:"13";s:25:"css_button_padding_bottom";s:2:"13";s:23:"css_button_padding_left";s:2:"16";s:24:"css_button_padding_right";s:2:"16";s:22:"css_button_margin_unit";s:2:"px";s:21:"css_button_margin_top";s:1:"0";s:24:"css_button_margin_bottom";s:1:"0";s:22:"css_button_margin_left";s:1:"0";s:23:"css_button_margin_right";s:1:"0";s:9:"show_icon";s:4:"font";s:24:"css_button_icon_size_svg";s:2:"11";s:27:"css_button_icon_image_width";s:2:"20";s:27:"css_button_icon_margin_unit";s:2:"px";s:26:"css_button_icon_margin_top";s:1:"5";s:29:"css_button_icon_margin_bottom";s:1:"5";s:27:"css_button_icon_margin_left";s:1:"5";s:28:"css_button_icon_margin_right";s:1:"5";s:9:"css_res_t";s:8:"disabled";s:21:"css_res_t_margin_unit";s:2:"px";s:20:"css_res_t_margin_top";s:1:"0";s:23:"css_res_t_margin_bottom";s:1:"0";s:21:"css_res_t_margin_left";s:1:"0";s:22:"css_res_t_margin_right";s:1:"0";s:20:"css_res_t_sep_height";s:2:"32";s:23:"css_res_t_sep_thickness";s:1:"1";s:31:"css_res_t_thumbnail_margin_unit";s:2:"px";s:30:"css_res_t_thumbnail_margin_top";s:1:"0";s:33:"css_res_t_thumbnail_margin_bottom";s:1:"0";s:31:"css_res_t_thumbnail_margin_left";s:1:"0";s:32:"css_res_t_thumbnail_margin_right";s:1:"0";s:32:"css_res_t_thumbnail_padding_unit";s:2:"px";s:31:"css_res_t_thumbnail_padding_top";s:1:"0";s:34:"css_res_t_thumbnail_padding_bottom";s:1:"0";s:32:"css_res_t_thumbnail_padding_left";s:1:"0";s:33:"css_res_t_thumbnail_padding_right";s:1:"0";s:27:"css_res_t_main_padding_unit";s:2:"px";s:26:"css_res_t_main_padding_top";s:2:"25";s:29:"css_res_t_main_padding_bottom";s:2:"25";s:27:"css_res_t_main_padding_left";s:2:"22";s:28:"css_res_t_main_padding_right";s:2:"22";s:25:"css_res_t_title_font_size";s:2:"12";s:27:"css_res_t_title_line_height";s:2:"12";s:27:"css_res_t_title_margin_unit";s:2:"px";s:26:"css_res_t_title_margin_top";s:2:"10";s:29:"css_res_t_title_margin_bottom";s:2:"10";s:27:"css_res_t_title_margin_left";s:2:"10";s:28:"css_res_t_title_margin_right";s:2:"10";s:24:"css_res_t_cats_font_size";s:2:"10";s:26:"css_res_t_cats_line_height";s:2:"10";s:26:"css_res_t_cats_margin_unit";s:2:"px";s:25:"css_res_t_cats_margin_top";s:2:"10";s:28:"css_res_t_cats_margin_bottom";s:2:"10";s:26:"css_res_t_cats_margin_left";s:2:"10";s:27:"css_res_t_cats_margin_right";s:2:"10";s:25:"css_res_t_staff_font_size";s:2:"12";s:27:"css_res_t_staff_line_height";s:2:"12";s:27:"css_res_t_staff_margin_unit";s:2:"px";s:26:"css_res_t_staff_margin_top";s:2:"10";s:29:"css_res_t_staff_margin_bottom";s:2:"10";s:27:"css_res_t_staff_margin_left";s:2:"10";s:28:"css_res_t_staff_margin_right";s:2:"10";s:27:"css_res_t_partner_font_size";s:2:"12";s:29:"css_res_t_partner_line_height";s:2:"12";s:29:"css_res_t_partner_margin_unit";s:2:"px";s:28:"css_res_t_partner_margin_top";s:2:"10";s:31:"css_res_t_partner_margin_bottom";s:2:"10";s:29:"css_res_t_partner_margin_left";s:2:"10";s:30:"css_res_t_partner_margin_right";s:2:"10";s:27:"css_res_t_excerpt_font_size";s:2:"13";s:29:"css_res_t_excerpt_line_height";s:2:"22";s:29:"css_res_t_excerpt_margin_unit";s:2:"px";s:28:"css_res_t_excerpt_margin_top";s:2:"22";s:31:"css_res_t_excerpt_margin_bottom";s:2:"22";s:29:"css_res_t_excerpt_margin_left";s:2:"22";s:30:"css_res_t_excerpt_margin_right";s:2:"22";s:26:"css_res_t_button_font_size";s:2:"11";s:29:"css_res_t_button_padding_unit";s:2:"px";s:28:"css_res_t_button_padding_top";s:2:"13";s:31:"css_res_t_button_padding_bottom";s:2:"13";s:29:"css_res_t_button_padding_left";s:2:"16";s:30:"css_res_t_button_padding_right";s:2:"16";s:28:"css_res_t_button_margin_unit";s:2:"px";s:27:"css_res_t_button_margin_top";s:2:"22";s:30:"css_res_t_button_margin_bottom";s:2:"22";s:28:"css_res_t_button_margin_left";s:2:"22";s:29:"css_res_t_button_margin_right";s:2:"22";s:30:"css_res_t_button_icon_size_svg";s:2:"11";s:33:"css_res_t_button_icon_margin_unit";s:2:"px";s:32:"css_res_t_button_icon_margin_top";s:1:"5";s:35:"css_res_t_button_icon_margin_bottom";s:1:"5";s:33:"css_res_t_button_icon_margin_left";s:1:"5";s:34:"css_res_t_button_icon_margin_right";s:1:"5";s:9:"css_res_p";s:8:"disabled";s:21:"css_res_p_margin_unit";s:2:"px";s:20:"css_res_p_margin_top";s:1:"5";s:23:"css_res_p_margin_bottom";s:1:"5";s:21:"css_res_p_margin_left";s:1:"5";s:22:"css_res_p_margin_right";s:1:"5";s:20:"css_res_p_sep_height";s:2:"32";s:23:"css_res_p_sep_thickness";s:1:"1";s:31:"css_res_p_thumbnail_margin_unit";s:2:"px";s:30:"css_res_p_thumbnail_margin_top";s:1:"0";s:33:"css_res_p_thumbnail_margin_bottom";s:1:"0";s:31:"css_res_p_thumbnail_margin_left";s:1:"0";s:32:"css_res_p_thumbnail_margin_right";s:1:"0";s:32:"css_res_p_thumbnail_padding_unit";s:2:"px";s:31:"css_res_p_thumbnail_padding_top";s:1:"0";s:34:"css_res_p_thumbnail_padding_bottom";s:1:"0";s:32:"css_res_p_thumbnail_padding_left";s:1:"0";s:33:"css_res_p_thumbnail_padding_right";s:1:"0";s:27:"css_res_p_main_padding_unit";s:2:"px";s:26:"css_res_p_main_padding_top";s:2:"25";s:29:"css_res_p_main_padding_bottom";s:2:"25";s:27:"css_res_p_main_padding_left";s:2:"22";s:28:"css_res_p_main_padding_right";s:2:"22";s:25:"css_res_p_title_font_size";s:2:"12";s:27:"css_res_p_title_line_height";s:2:"12";s:27:"css_res_p_title_margin_unit";s:2:"px";s:26:"css_res_p_title_margin_top";s:2:"10";s:29:"css_res_p_title_margin_bottom";s:2:"10";s:27:"css_res_p_title_margin_left";s:2:"10";s:28:"css_res_p_title_margin_right";s:2:"10";s:24:"css_res_p_cats_font_size";s:2:"10";s:26:"css_res_p_cats_line_height";s:2:"10";s:26:"css_res_p_cats_margin_unit";s:2:"px";s:25:"css_res_p_cats_margin_top";s:1:"0";s:28:"css_res_p_cats_margin_bottom";s:1:"0";s:26:"css_res_p_cats_margin_left";s:1:"0";s:27:"css_res_p_cats_margin_right";s:1:"0";s:25:"css_res_p_staff_font_size";s:2:"12";s:27:"css_res_p_staff_line_height";s:2:"12";s:27:"css_res_p_staff_margin_unit";s:2:"px";s:26:"css_res_p_staff_margin_top";s:2:"10";s:29:"css_res_p_staff_margin_bottom";s:2:"10";s:27:"css_res_p_staff_margin_left";s:2:"10";s:28:"css_res_p_staff_margin_right";s:2:"10";s:27:"css_res_p_partner_font_size";s:2:"12";s:29:"css_res_p_partner_line_height";s:2:"12";s:29:"css_res_p_partner_margin_unit";s:2:"px";s:28:"css_res_p_partner_margin_top";s:2:"10";s:31:"css_res_p_partner_margin_bottom";s:2:"10";s:29:"css_res_p_partner_margin_left";s:2:"10";s:30:"css_res_p_partner_margin_right";s:2:"10";s:27:"css_res_p_excerpt_font_size";s:2:"13";s:29:"css_res_p_excerpt_line_height";s:2:"22";s:29:"css_res_p_excerpt_margin_unit";s:2:"px";s:28:"css_res_p_excerpt_margin_top";s:2:"22";s:31:"css_res_p_excerpt_margin_bottom";s:2:"22";s:29:"css_res_p_excerpt_margin_left";s:2:"22";s:30:"css_res_p_excerpt_margin_right";s:2:"22";s:26:"css_res_p_button_font_size";s:2:"11";s:29:"css_res_p_button_padding_unit";s:2:"px";s:28:"css_res_p_button_padding_top";s:2:"13";s:31:"css_res_p_button_padding_bottom";s:2:"13";s:29:"css_res_p_button_padding_left";s:2:"16";s:30:"css_res_p_button_padding_right";s:2:"16";s:28:"css_res_p_button_margin_unit";s:2:"px";s:27:"css_res_p_button_margin_top";s:1:"0";s:30:"css_res_p_button_margin_bottom";s:1:"0";s:28:"css_res_p_button_margin_left";s:1:"0";s:29:"css_res_p_button_margin_right";s:1:"0";s:30:"css_res_p_button_icon_size_svg";s:2:"11";s:33:"css_res_p_button_icon_margin_unit";s:2:"px";s:32:"css_res_p_button_icon_margin_top";s:1:"5";s:35:"css_res_p_button_icon_margin_bottom";s:1:"5";s:33:"css_res_p_button_icon_margin_left";s:1:"5";s:34:"css_res_p_button_icon_margin_right";s:1:"5";s:17:"carousel_autoplay";s:1:"0";s:23:"carousel_autoplay_hover";s:5:"false";s:21:"main_filter_title_all";s:3:"All";s:26:"css_main_heading_font_size";s:2:"17";s:28:"css_main_heading_font_weight";s:3:"400";s:31:"css_main_heading_letter_spacing";s:1:"0";s:28:"css_main_heading_line_height";s:2:"37";s:31:"css_main_heading_link_font_size";s:2:"11";s:33:"css_main_heading_link_font_weight";s:3:"600";s:36:"css_main_heading_link_letter_spacing";s:1:"0";s:34:"css_main_heading_link_padding_unit";s:2:"px";s:33:"css_main_heading_link_padding_top";s:2:"10";s:36:"css_main_heading_link_padding_bottom";s:2:"10";s:34:"css_main_heading_link_padding_left";s:2:"10";s:35:"css_main_heading_link_padding_right";s:2:"10";s:13:"view_all_link";s:1:"#";s:26:"css_main_heading_sep_color";s:7:"#4f4f4f";s:26:"css_main_heading_sep_style";s:6:"dotted";s:23:"css_heading_margin_unit";s:2:"px";s:22:"css_heading_margin_top";s:2:"20";s:23:"css_heading_margin_left";s:2:"20";s:24:"css_heading_margin_right";s:2:"20";s:32:"css_res_t_main_heading_font_size";s:2:"17";s:34:"css_res_t_main_heading_line_height";s:2:"37";s:37:"css_res_t_main_heading_link_font_size";s:2:"11";s:40:"css_res_t_main_heading_link_padding_unit";s:2:"px";s:39:"css_res_t_main_heading_link_padding_top";s:2:"10";s:42:"css_res_t_main_heading_link_padding_bottom";s:2:"10";s:40:"css_res_t_main_heading_link_padding_left";s:2:"10";s:41:"css_res_t_main_heading_link_padding_right";s:2:"10";s:29:"css_res_t_heading_margin_unit";s:2:"px";s:28:"css_res_t_heading_margin_top";s:2:"20";s:31:"css_res_t_heading_margin_bottom";s:2:"20";s:29:"css_res_t_heading_margin_left";s:2:"20";s:30:"css_res_t_heading_margin_right";s:2:"20";s:32:"css_res_p_main_heading_font_size";s:2:"17";s:34:"css_res_p_main_heading_line_height";s:2:"37";s:37:"css_res_p_main_heading_link_font_size";s:2:"11";s:40:"css_res_p_main_heading_link_padding_unit";s:2:"px";s:39:"css_res_p_main_heading_link_padding_top";s:2:"10";s:42:"css_res_p_main_heading_link_padding_bottom";s:2:"10";s:40:"css_res_p_main_heading_link_padding_left";s:2:"10";s:41:"css_res_p_main_heading_link_padding_right";s:2:"10";s:29:"css_res_p_heading_margin_unit";s:2:"px";s:28:"css_res_p_heading_margin_top";s:2:"20";s:31:"css_res_p_heading_margin_bottom";s:2:"20";s:29:"css_res_p_heading_margin_left";s:2:"20";s:30:"css_res_p_heading_margin_right";s:2:"20";s:19:"css_filter_bg_color";s:7:"#ffffff";s:23:"css_filter_border_width";s:1:"1";s:16:"css_filter_color";s:7:"#979797";s:23:"css_filter_color_active";s:7:"#ffffff";s:20:"css_filter_font_size";s:2:"11";s:22:"css_filter_font_weight";s:3:"700";s:23:"css_filter_padding_unit";s:2:"px";s:22:"css_filter_padding_top";s:1:"12";s:25:"css_filter_padding_bottom";s:2:"12";s:23:"css_filter_padding_left";s:2:"12";s:24:"css_filter_padding_right";s:2:"12";s:19:"css_filter_position";s:4:"left";s:18:"css_filter_spacing";s:2:"10";s:22:"css_filter_margin_unit";s:2:"px";s:21:"css_filter_margin_top";s:2:"20";s:24:"css_filter_margin_bottom";s:2:"20";s:22:"css_filter_margin_left";s:1:"0";s:23:"css_filter_margin_right";s:1:"0";s:25:"css_res_t_filter_position";s:4:"left";s:26:"css_res_t_filter_font_size";s:2:"11";s:29:"css_res_t_filter_padding_unit";s:2:"px";s:28:"css_res_t_filter_padding_top";s:2:"12";s:31:"css_res_t_filter_padding_bottom";s:2:"12";s:29:"css_res_t_filter_padding_left";s:2:"12";s:30:"css_res_t_filter_padding_right";s:2:"12";s:24:"css_res_t_filter_spacing";s:2:"10";s:33:"css_res_t_filter_item_margin_unit";s:2:"px";s:32:"css_res_t_filter_item_margin_top";s:1:"0";s:35:"css_res_t_filter_item_margin_bottom";s:1:"0";s:33:"css_res_t_filter_item_margin_left";s:1:"0";s:34:"css_res_t_filter_item_margin_right";s:1:"0";s:28:"css_res_t_filter_margin_unit";s:2:"px";s:27:"css_res_t_filter_margin_top";s:2:"20";s:30:"css_res_t_filter_margin_bottom";s:2:"20";s:28:"css_res_t_filter_margin_left";s:1:"0";s:29:"css_res_t_filter_margin_right";s:1:"0";s:25:"css_res_p_filter_position";s:4:"left";s:26:"css_res_p_filter_font_size";s:2:"11";s:29:"css_res_p_filter_padding_unit";s:2:"px";s:28:"css_res_p_filter_padding_top";s:2:"12";s:31:"css_res_p_filter_padding_bottom";s:2:"12";s:29:"css_res_p_filter_padding_left";s:2:"12";s:30:"css_res_p_filter_padding_right";s:2:"12";s:24:"css_res_p_filter_spacing";s:2:"10";s:33:"css_res_p_filter_item_margin_unit";s:2:"px";s:32:"css_res_p_filter_item_margin_top";s:1:"0";s:35:"css_res_p_filter_item_margin_bottom";s:1:"0";s:33:"css_res_p_filter_item_margin_left";s:1:"0";s:34:"css_res_p_filter_item_margin_right";s:1:"0";s:28:"css_res_p_filter_margin_unit";s:2:"px";s:27:"css_res_p_filter_margin_top";s:2:"20";s:30:"css_res_p_filter_margin_bottom";s:2:"20";s:28:"css_res_p_filter_margin_left";s:1:"0";s:29:"css_res_p_filter_margin_right";s:1:"0";s:18:"arrows_slide_speed";s:3:"200";s:15:"arrows_position";s:5:"above";s:23:"css_arrows_border_width";s:1:"0";s:24:"css_arrows_border_radius";s:1:"3";s:16:"css_arrows_color";s:7:"#ffffff";s:22:"css_arrows_color_hover";s:7:"#ffffff";s:15:"css_arrows_size";s:2:"24";s:21:"css_arrows_arrow_size";s:2:"10";s:22:"css_arrows_margin_unit";s:2:"px";s:21:"css_arrows_margin_top";s:1:"6";s:23:"css_arrows_margin_right";s:1:"0";s:24:"css_arrows_margin_bottom";s:2:"20";s:23:"css_arrows_margint_left";s:1:"0";s:28:"css_arrows_aside_margin_unit";s:2:"px";s:27:"css_arrows_aside_margin_top";s:3:"-30";s:29:"css_arrows_aside_margin_right";s:3:"-30";s:30:"css_arrows_aside_margin_bottom";s:3:"-30";s:29:"css_arrows_aside_margint_left";s:3:"-30";s:34:"css_res_t_arrows_aside_margin_unit";s:2:"px";s:33:"css_res_t_arrows_aside_margin_top";s:3:"-20";s:36:"css_res_t_arrows_aside_margin_bottom";s:3:"-20";s:35:"css_res_t_arrows_aside_margint_left";s:3:"-20";s:35:"css_res_t_arrows_aside_margin_right";s:3:"-20";s:34:"css_res_p_arrows_aside_margin_unit";s:2:"px";s:33:"css_res_p_arrows_aside_margin_top";s:3:"-20";s:36:"css_res_p_arrows_aside_margin_bottom";s:3:"-20";s:35:"css_res_p_arrows_aside_margint_left";s:3:"-20";s:35:"css_res_p_arrows_aside_margin_right";s:3:"-20";s:19:"circles_slide_speed";s:3:"800";s:17:"css_circles_color";s:7:"#b9b9b9";s:23:"css_circles_margin_unit";s:2:"px";s:25:"css_circles_margin_bottom";s:2:"20";s:23:"css_circles_margin_left";s:1:"0";s:24:"css_circles_margin_right";s:1:"0";s:16:"css_circles_size";s:1:"7";s:19:"css_circles_spacing";s:1:"3";s:29:"css_res_t_circles_margin_unit";s:2:"px";s:28:"css_res_t_circles_margin_top";s:2:"20";s:31:"css_res_t_circles_margin_bottom";s:2:"20";s:29:"css_res_t_circles_margin_left";s:1:"0";s:30:"css_res_t_circles_margin_right";s:1:"0";s:22:"css_res_t_circles_size";s:1:"7";s:25:"css_res_t_circles_spacing";s:1:"3";s:29:"css_res_p_circles_margin_unit";s:2:"px";s:28:"css_res_p_circles_margin_top";s:2:"20";s:31:"css_res_p_circles_margin_bottom";s:2:"20";s:29:"css_res_p_circles_margin_left";s:1:"0";s:30:"css_res_p_circles_margin_right";s:1:"0";s:22:"css_res_p_circles_size";s:1:"7";s:25:"css_res_p_circles_spacing";s:1:"3";s:15:"pagination_text";s:15:"Load More Items";s:13:"css_pag_align";s:4:"left";s:20:"css_pag_border_width";s:1:"0";s:19:"css_pag_border_trbl";s:21:"top right bottom left";s:21:"css_pag_border_radius";s:1:"0";s:20:"css_pag_padding_unit";s:2:"px";s:19:"css_pag_padding_top";s:1:"0";s:22:"css_pag_padding_bottom";s:1:"0";s:20:"css_pag_padding_left";s:1:"0";s:21:"css_pag_padding_right";s:1:"0";s:28:"css_pag_item_bg_color_active";s:7:"#5890e5";s:34:"css_pag_item_bg_color_active_hover";s:7:"#ffffff";s:21:"css_pag_item_bg_color";s:7:"#ffffff";s:36:"css_pag_item_bg_color_inactive_hover";s:7:"#ffffff";s:25:"css_pag_item_border_color";s:7:"#e8e8e8";s:31:"css_pag_item_border_color_hover";s:7:"#e8e8e8";s:32:"css_pag_item_border_color_active";s:7:"#5890e5";s:25:"css_pag_item_border_width";s:1:"1";s:32:"css_pag_item_border_width_active";s:1:"1";s:24:"css_pag_item_border_trbl";s:21:"top right bottom left";s:26:"css_pag_item_border_radius";s:3:"3";s:25:"css_pag_item_color_active";s:7:"#ffffff";s:24:"css_pag_item_color_hover";s:7:"#979797";s:18:"css_pag_item_color";s:7:"#979797";s:33:"css_pag_item_color_inactive_hover";s:7:"#979797";s:22:"css_pag_item_font_size";s:2:"11";s:24:"css_pag_item_font_weight";s:3:"700";s:27:"css_pag_item_letter_spacing";s:1:"0";s:25:"css_pag_item_padding_unit";s:2:"px";s:24:"css_pag_item_padding_top";s:2:"12";s:27:"css_pag_item_padding_bottom";s:2:"12";s:25:"css_pag_item_padding_left";s:2:"12";s:26:"css_pag_item_padding_right";s:2:"12";s:20:"css_pag_item_spacing";s:2:"10";s:20:"css_pag_button_width";s:12:"inline-block";s:19:"css_pag_margin_unit";s:2:"px";s:18:"css_pag_margin_top";s:2:"30";s:20:"css_pag_margin_right";s:1:"0";s:21:"css_pag_margin_bottom";s:1:"0";s:19:"css_pag_margin_left";s:1:"0";s:25:"css_res_t_pag_margin_unit";s:2:"px";s:24:"css_res_t_pag_margin_top";s:2:"30";s:26:"css_res_t_pag_margin_right";s:1:"0";s:27:"css_res_t_pag_margin_bottom";s:1:"0";s:25:"css_res_t_pag_margin_left";s:1:"0";s:25:"css_res_p_pag_margin_unit";s:2:"px";s:24:"css_res_p_pag_margin_top";s:2:"30";s:26:"css_res_p_pag_margin_right";s:1:"0";s:27:"css_res_p_pag_margin_bottom";s:1:"0";s:25:"css_res_p_pag_margin_left";s:1:"0";s:8:"css_anim";s:4:"none";s:14:"css_anim_delay";s:1:"0";s:17:"css_anim_duration";s:3:"650";s:15:"css_anim_easing";s:4:"ease";s:14:"css_anim_hover";s:4:"none";s:14:"css_anim_speed";s:3:"650";s:15:"css_load_preset";s:4:"none";s:16:"dslc_m_size_last";s:3:"yes";s:21:"module_render_nonajax";b:1;s:11:"dslc_m_size";s:2:"12";s:12:"element_type";s:6:"module";s:4:"last";s:3:"yes";s:10:"categories";b:0;s:13:"query_post_in";b:0;s:17:"query_post_not_in";b:0;s:16:"css_margin_group";b:0;s:22:"css_thumbnail_bg_color";b:0;s:26:"css_thumbnail_margin_group";b:0;s:27:"css_thumbnail_padding_group";b:0;s:19:"thumb_resize_height";b:0;s:25:"thumb_resize_width_manual";b:0;s:22:"css_main_padding_group";b:0;s:19:"css_main_box_shadow";b:0;s:27:"css_main_inner_margin_group";b:0;s:21:"css_title_color_hover";b:0;s:22:"css_title_margin_group";b:0;s:14:"css_cats_color";b:0;s:21:"css_cats_margin_group";b:0;s:21:"css_staff_font_family";b:0;s:22:"css_staff_margin_group";b:0;s:23:"css_partner_font_family";b:0;s:24:"css_partner_margin_group";b:0;s:20:"excerpt_margin_group";b:0;s:25:"css_excerpt_padding_group";b:0;s:23:"css_button_border_color";b:0;s:29:"css_button_border_color_hover";b:0;s:24:"css_button_padding_group";b:0;s:23:"css_button_margin_group";b:0;s:17:"button_inline_svg";b:0;s:17:"button_icon_image";b:0;s:28:"css_button_icon_margin_group";b:0;s:22:"css_res_t_margin_group";b:0;s:32:"css_res_t_thumbnail_margin_group";b:0;s:33:"css_res_t_thumbnail_padding_group";b:0;s:28:"css_res_t_main_padding_group";b:0;s:28:"css_res_t_title_margin_group";b:0;s:27:"css_res_t_cats_margin_group";b:0;s:28:"css_res_t_staff_margin_group";b:0;s:30:"css_res_t_partner_margin_group";b:0;s:30:"css_res_t_excerpt_margin_group";b:0;s:30:"css_res_t_button_padding_group";b:0;s:29:"css_res_t_button_margin_group";b:0;s:34:"css_res_t_button_icon_margin_group";b:0;s:22:"css_res_p_margin_group";b:0;s:32:"css_res_p_thumbnail_margin_group";b:0;s:33:"css_res_p_thumbnail_padding_group";b:0;s:28:"css_res_p_main_padding_group";b:0;s:28:"css_res_p_title_margin_group";b:0;s:27:"css_res_p_cats_margin_group";b:0;s:28:"css_res_p_staff_margin_group";b:0;s:30:"css_res_p_partner_margin_group";b:0;s:30:"css_res_p_excerpt_margin_group";b:0;s:30:"css_res_p_button_padding_group";b:0;s:29:"css_res_p_button_margin_group";b:0;s:34:"css_res_p_button_icon_margin_group";b:0;s:23:"main_heading_link_title";b:0;s:22:"css_main_heading_color";b:0;s:28:"css_main_heading_font_family";b:0;s:33:"css_main_heading_link_font_family";b:0;s:35:"css_main_heading_link_padding_group";b:0;s:24:"css_heading_margin_group";b:0;s:41:"css_res_t_main_heading_link_padding_group";b:0;s:30:"css_res_t_heading_margin_group";b:0;s:41:"css_res_p_main_heading_link_padding_group";b:0;s:30:"css_res_p_heading_margin_group";b:0;s:22:"css_filter_font_family";b:0;s:24:"css_filter_padding_group";b:0;s:23:"css_filter_margin_group";b:0;s:30:"css_res_t_filter_padding_group";b:0;s:34:"css_res_t_filter_item_margin_group";b:0;s:29:"css_res_t_filter_margin_group";b:0;s:30:"css_res_p_filter_padding_group";b:0;s:34:"css_res_p_filter_item_margin_group";b:0;s:29:"css_res_p_filter_margin_group";b:0;s:23:"css_arrows_border_color";b:0;s:29:"css_arrows_border_color_hover";b:0;s:23:"css_arrows_margin_group";b:0;s:29:"css_arrows_aside_margin_group";b:0;s:35:"css_res_t_arrows_aside_margin_group";b:0;s:35:"css_res_p_arrows_aside_margin_group";b:0;s:24:"css_circles_margin_group";b:0;s:30:"css_res_t_circles_margin_group";b:0;s:30:"css_res_p_circles_margin_group";b:0;s:16:"css_pag_bg_color";b:0;s:20:"css_pag_border_color";b:0;s:21:"css_pag_padding_group";b:0;s:24:"css_pag_item_font_family";b:0;s:26:"css_pag_item_padding_group";b:0;s:20:"css_pag_margin_group";b:0;s:26:"css_res_t_pag_margin_group";b:0;s:26:"css_res_p_pag_margin_group";b:0;s:15:"css_save_preset";b:0;s:12:"custom_class";b:0;}[/dslc_module_projects_output]
				<div class="dslca-module-options-front">
					<textarea class="dslca-module-option-front" data-id="css_show_on">desktop tablet phone</textarea>
					<textarea class="dslca-module-option-front" data-id="css_custom">enabled</textarea>
				</div>
				<textarea class="dslca-module-code">{"size":"12","amount":"6"}</textarea>
				<span class="dslc-sortable-helper-icon dslc-icon-briefcase" data-title="Projects" data-icon="briefcase"></span>
			</div>
		</div>
	</div>
</div>`;

  const copyToClipboard = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0A1628]/95 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-3xl rounded-3xl bg-[#0F2038] border-2 border-[#00C9A7]/50 shadow-2xl p-6 sm:p-8 space-y-6 max-h-[90vh] overflow-y-auto">
        
        {/* Header */}
        <div className="flex items-center justify-between border-b border-[#1A3152] pb-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-[#00C9A7]/20 text-[#00C9A7]">
              <Settings className="w-5 h-5 animate-spin" style={{ animationDuration: '10s' }} />
            </div>
            <div>
              <h3 className="font-syne font-extrabold text-xl text-[#F5F0E8]">
                WP-ADMIN Integracija & Live Editor
              </h3>
              <p className="text-xs text-[#C9A84C] font-mono">
                Upravljanje i izvoz preoblikovane strukture za bh-assistant.ba
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-[#0A1628] border border-[#1A3152] text-[#F5F0E8] hover:text-[#00C9A7]"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="flex gap-2 border-b border-[#1A3152] pb-3">
          <button
            onClick={() => setActiveTab('info')}
            className={`px-4 py-2 rounded-xl font-syne font-bold text-xs flex items-center gap-2 transition-all ${
              activeTab === 'info'
                ? 'bg-[#00C9A7] text-[#0A1628]'
                : 'bg-[#0A1628] text-[#F5F0E8]/70 hover:text-[#F5F0E8]'
            }`}
          >
            <Layers className="w-4 h-4" />
            <span>Pravni & Osnovni Podaci</span>
          </button>
          <button
            onClick={() => setActiveTab('wpcode')}
            className={`px-4 py-2 rounded-xl font-syne font-bold text-xs flex items-center gap-2 transition-all ${
              activeTab === 'wpcode'
                ? 'bg-[#00C9A7] text-[#0A1628]'
                : 'bg-[#0A1628] text-[#F5F0E8]/70 hover:text-[#F5F0E8]'
            }`}
          >
            <Code className="w-4 h-4" />
            <span>WP Kod Za Izvoz (post=53)</span>
          </button>
        </div>

        {activeTab === 'info' ? (
          <>
            {/* Notice */}
            <div className="p-4 rounded-xl bg-[#0A1628] border border-[#1A3152] text-xs text-[#F5F0E8]/80 font-sans leading-relaxed">
              Ovaj interaktivni mod omogućava izmjenu i prilagodbu teksta i podataka firme i nakon što se website aktivira na WordPress / WP-Admin platformi.
            </div>

            {saved && (
              <div className="p-3.5 rounded-xl bg-[#00C9A7]/20 border border-[#00C9A7] text-[#00C9A7] text-xs font-bold font-mono flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" />
                <span>Sve promjene su uspješno sačuvane i primijenjene na sajtu!</span>
              </div>
            )}

            {/* Form */}
            <form onSubmit={handleSave} className="space-y-4 text-xs font-sans">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-mono text-[#F5F0E8]/80 mb-1">Naziv Firme</label>
                  <input
                    type="text"
                    value={formData.fullLegalName}
                    onChange={(e) => setFormData({ ...formData, fullLegalName: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#0A1628] border border-[#1A3152] text-[#F5F0E8] focus:border-[#00C9A7] outline-none"
                  />
                </div>

                <div>
                  <label className="block font-mono text-[#F5F0E8]/80 mb-1">Moto / Slogan</label>
                  <input
                    type="text"
                    value={formData.motto}
                    onChange={(e) => setFormData({ ...formData, motto: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#0A1628] border border-[#1A3152] text-[#F5F0E8] focus:border-[#00C9A7] outline-none"
                  />
                </div>

                <div>
                  <label className="block font-mono text-[#F5F0E8]/80 mb-1">Grad & Sjedište</label>
                  <input
                    type="text"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#0A1628] border border-[#1A3152] text-[#F5F0E8] focus:border-[#00C9A7] outline-none"
                  />
                </div>

                <div>
                  <label className="block font-mono text-[#F5F0E8]/80 mb-1">E-mail Adresa</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#0A1628] border border-[#1A3152] text-[#F5F0E8] focus:border-[#00C9A7] outline-none"
                  />
                </div>

                <div>
                  <label className="block font-mono text-[#F5F0E8]/80 mb-1">Telefon</label>
                  <input
                    type="text"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#0A1628] border border-[#1A3152] text-[#F5F0E8] focus:border-[#00C9A7] outline-none"
                  />
                </div>

                <div>
                  <label className="block font-mono text-[#F5F0E8]/80 mb-1">JIB Broj</label>
                  <input
                    type="text"
                    value={formData.jib}
                    onChange={(e) => setFormData({ ...formData, jib: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#0A1628] border border-[#1A3152] text-[#F5F0E8] focus:border-[#00C9A7] outline-none"
                  />
                </div>
              </div>

              <div className="pt-4 border-t border-[#1A3152] flex justify-end gap-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-5 py-2.5 rounded-xl bg-[#0A1628] border border-[#1A3152] text-[#F5F0E8] font-bold"
                >
                  Zatvori
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-xl bg-[#00C9A7] hover:bg-[#00E5BE] text-[#0A1628] font-syne font-bold flex items-center gap-2"
                >
                  <Save className="w-4 h-4" />
                  <span>Sačuvaj Promjene na Sajtu</span>
                </button>
              </div>
            </form>
          </>
        ) : (
          <div className="space-y-4">
            <div className="p-4 rounded-xl bg-[#0A1628] border border-[#00C9A7]/40 text-xs text-[#F5F0E8] space-y-2">
              <p className="font-bold text-[#00C9A7]">
                Uputstvo za unos na https://bh-assistant.ba/wp-admin/post.php?post=53&action=edit:
              </p>
              <ol className="list-decimal list-inside space-y-1 text-[#F5F0E8]/80 font-mono">
                <li>Otvori svoj WP urednik (Post #53) u pretraživaču.</li>
                <li>Prebaci prikaz na <strong>"Code Editor" / "Custom HTML"</strong> modul.</li>
                <li>Odaberi željenu verziju koda ispod, klikni <strong>Kopiraj Kod</strong> i zalijepi u WordPress, pa pritisni <strong>Update</strong>.</li>
              </ol>
            </div>

            {/* Mode Switcher */}
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => setCodeMode('preoblikovani')}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold font-syne transition-all ${
                  codeMode === 'preoblikovani'
                    ? 'bg-[#00C9A7] text-[#0A1628] shadow-md'
                    : 'bg-[#0A1628] border border-[#1A3152] text-[#F5F0E8]/70 hover:text-[#F5F0E8]'
                }`}
              >
                Nova Preoblikovana Struktura
              </button>
              <button
                type="button"
                onClick={() => setCodeMode('prvobitni')}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold font-syne transition-all ${
                  codeMode === 'prvobitni'
                    ? 'bg-[#C9A84C] text-[#0A1628] shadow-md'
                    : 'bg-[#0A1628] border border-[#1A3152] text-[#F5F0E8]/70 hover:text-[#F5F0E8]'
                }`}
              >
                Prvobitno Stanje (Live Composer Backup)
              </button>
            </div>

            <div className="relative">
              <textarea
                readOnly
                value={codeMode === 'preoblikovani' ? wpCodePreoblikovani : wpCodePrvobitni}
                className="w-full h-64 p-4 rounded-xl bg-[#0A1628] border border-[#1A3152] font-mono text-[11px] text-[#00C9A7] outline-none resize-none leading-relaxed"
              />
              <button
                onClick={() => copyToClipboard(codeMode === 'preoblikovani' ? wpCodePreoblikovani : wpCodePrvobitni)}
                className={`absolute top-12 right-3 px-3.5 py-1.5 rounded-lg text-[#0A1628] font-syne font-bold text-xs flex items-center gap-1.5 shadow-lg transition-all ${
                  codeMode === 'prvobitni' ? 'bg-[#C9A84C] hover:bg-[#E5BF62]' : 'bg-[#00C9A7] hover:bg-[#00E5BE]'
                }`}
              >
                {copied ? <CheckCircle2 className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                <span>{copied ? 'Kopiraj Kod' : 'Kopiraj WP Kod'}</span>
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
