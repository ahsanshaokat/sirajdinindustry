<template>
  <loader :active="loaderActive" text="Please wait few seconds..." />
  <section class="breadcrumb-box" v-if="!loaderActive">
    <div class="my-container-wrapper">
      <nav style="--bs-breadcrumb-divider: '>'" aria-label="breadcrumb">
        <ol class="breadcrumb" style="margin-bottom: 0">
          <li class="breadcrumb-item">
            <a href="https://sirajdinindustry.com/">Home</a>
          </li>
          <li class="breadcrumb-item"><a>Resources</a></li>
          <li class="breadcrumb-item active" aria-current="page">
            {{ activePage.title }}
          </li>
        </ol>
      </nav>
    </div>
  </section>

  <div
    class="page-section-wrapper moble-mer-top inner-page inner-bg product-page"
    style="transform: none"
    v-if="!loaderActive"
  >
    <div class="inner-hei-top moblie-hide"></div>
    <div class="my-container-wrapper" style="transform: none">
      <div class="row" style="transform: none">
        <div
          class="col-md-9 sticky-item"
          style="
            position: relative;
            overflow: visible;
            box-sizing: border-box;
            min-height: 1px;
          "
        >
          <div
            class="theiaStickySidebar"
            style="
              padding-top: 0px;
              padding-bottom: 1px;
              position: static;
              transform: none;
            "
          >
            <div class="inner-right-wapper moblie-show padd-b40">
              <div class="imgblog">
                <img
                  :src="activePage.imageLink"
                  class=""
                  loading="lazy"
                  alt="Metal Beam Crash Barriers"
                />
              </div>
            </div>
            <section>
              <div class="inner-left-wapper">
                <div class="imgblog padd-b40 moblie-hide">
                  <img
                    class="bannerimg"
                    :src="activePage.imageLink"
                    loading="lazy"
                    alt="Metal Beam Crash Barriers"
                  />
                </div>
                <div>
                  <h1 class="titel-inner-top padd-b25">
                    <span class="colo-we">{{ activePage.title }}</span>
                  </h1>

                  <p class="padd-b40">{{ activePage.description }}</p>
                </div>
                <div style="clear: both"></div>
              </div>
              <div style="clear: both"></div>
            </section>
            <section>
              <div
                class="padd-t30 project-location-sec product-similar"
                style="background: #fff"
              >
                <div class="my-container-wrapper">
                  <div style="clear: both"></div>
                </div>
              </div>
            </section>

            <section>
              <div
                class="padd-t30 project-location-sec product-similar"
                style="background: #fff"
              >
                <div class="my-container-wrapper">
                  <div class="inner-left-wapper">
                    <div>
                      <!--<div  class="sub-titel-inner-n sub-titel-mob-inner padd-b20"> Location Specific <span class="colo-we"> Projects  </span></div> -->
                      <div
                        class="row padd-t20"
                        ref="resources"
                        id="resourceBodys"
                      >
                        <div class="col-sm-12">
                          <div class="accordion js-accordion">
                            <!--Crash Barriers start-->
                            <div
                              class="accordion__item js-accordion-item active"
                            >
                              <div class="accordion-header js-accordion-header">
                                Crash Barriers
                              </div>
                              <div
                                class="accordion-body js-accordion-body"
                                style="display: block"
                              >
                                <div
                                  class="accordion-body__contents"
                                  style="padding: 0px"
                                >
                                  <div style="overflow-x: auto">
                                    <table
                                      class="table table-striped"
                                      style="text-align: left"
                                    >
                                      <tbody>
                                        <tr style="text-align: left">
                                          <th style="font-weight: normal">1</th>
                                          <td class="tb-ft">
                                            CPEC Rahimyar Khan
                                          </td>
                                          <td class="tb-ft">
                                            M-5 motorway (New NH - 4) Project
                                          </td>
                                          <td class="tb-ft">7 KM</td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div class="accordion__item js-accordion-item">
                              <div class="accordion-header js-accordion-header">
                                High Mast and Poles
                              </div>
                              <div
                                class="accordion-body js-accordion-body"
                                style=""
                              >
                                <div
                                  class="accordion-body__contents"
                                  style="padding: 0px"
                                >
                                  <div style="overflow-x: auto">
                                    <table
                                      class="specifi"
                                      style="text-align: left"
                                    >
                                      <tbody>
                                        <tr style="text-align: left">
                                          <th style="font-weight: normal">1</th>
                                          <td class="tb-ft">
                                            Plant Illumination at Farakka,West
                                            Bengal for NTPC Ltd.
                                          </td>
                                        </tr>
                                        <tr style="text-align: left">
                                          <th style="font-weight: normal">2</th>
                                          <td class="tb-ft">
                                            Area Illumination at Barh, Bihar for
                                            NTPC Ltd.
                                          </td>
                                        </tr>
                                        <tr style="text-align: left">
                                          <th style="font-weight: normal">3</th>
                                          <td class="tb-ft">
                                            Yard Illumination at Bhatapara,CG,
                                            for South East Central Railway
                                          </td>
                                        </tr>
                                        <tr style="text-align: left">
                                          <th style="font-weight: normal">4</th>
                                          <td class="tb-ft">
                                            Yard Illumination at Salt Courturs,
                                            Chennai, for Southern Railway
                                          </td>
                                        </tr>
                                        <tr style="text-align: left">
                                          <th style="font-weight: normal">5</th>
                                          <td class="tb-ft">
                                            Illumination work for different
                                            stations at Ajmer, Rajasthan for
                                            North Western Railway
                                          </td>
                                        </tr>
                                        <tr style="text-align: left">
                                          <th style="font-weight: normal">6</th>
                                          <td class="tb-ft">
                                            Illumination work at Chennai Trade
                                            Centre, Chennai for CPWD
                                          </td>
                                        </tr>
                                        <tr style="text-align: left">
                                          <th style="font-weight: normal">7</th>
                                          <td class="tb-ft">
                                            Plant Illumination work at Noonmati,
                                            Guwahati for Indian Oil Corporation
                                            Ltd.
                                          </td>
                                        </tr>
                                        <tr style="text-align: left">
                                          <th style="font-weight: normal">8</th>
                                          <td class="tb-ft">
                                            Township Illumination at Neyveli,
                                            Tamilnadu for NLC Ltd.
                                          </td>
                                        </tr>
                                        <tr style="text-align: left">
                                          <th style="font-weight: normal">9</th>
                                          <td class="tb-ft">
                                            Area Illumination work at Vidyasagar
                                            University, Medniapur, West Bengal
                                          </td>
                                        </tr>
                                        <tr style="text-align: left">
                                          <th style="font-weight: normal">
                                            10
                                          </th>
                                          <td class="tb-ft">
                                            Area Illumination work at KRIBCO,
                                            Surat
                                          </td>
                                        </tr>
                                        <tr style="text-align: left">
                                          <th style="font-weight: normal">
                                            11
                                          </th>
                                          <td class="tb-ft">
                                            Supply of Lighting Mast and
                                            Polygonal Lighting In New Delhi for
                                            the expansion
                                          </td>
                                        </tr>
                                        <tr style="text-align: left">
                                          <th style="font-weight: normal">
                                            12
                                          </th>
                                          <td class="tb-ft">
                                            Modernization Project of Delhi
                                            International Airport
                                          </td>
                                        </tr>
                                        <tr style="text-align: left">
                                          <th style="font-weight: normal">
                                            13
                                          </th>
                                          <td class="tb-ft">
                                            Supply of Polygonal Street Lighting
                                            Poles to NHAI projects at Kanpur
                                          </td>
                                        </tr>
                                        <tr style="text-align: left">
                                          <th style="font-weight: normal">
                                            14
                                          </th>
                                          <td class="tb-ft">
                                            Supply of Polygonal Street lighting
                                            Poles to NHAI projects at Chennai
                                          </td>
                                        </tr>
                                        <tr style="text-align: left">
                                          <th style="font-weight: normal">
                                            15
                                          </th>
                                          <td class="tb-ft">
                                            Supply of Polygonal Street Lighting
                                            Pole to HUDA at Haryana
                                          </td>
                                        </tr>
                                        <tr style="text-align: left">
                                          <th style="font-weight: normal">
                                            16
                                          </th>
                                          <td class="tb-ft">
                                            Supply of Polygonal Street Lighting
                                            Poles to the NHAI project at
                                            Belgaum, Karnataka
                                          </td>
                                        </tr>
                                        <tr style="text-align: left">
                                          <th style="font-weight: normal">
                                            17
                                          </th>
                                          <td class="tb-ft">
                                            Supply Of polygonal Street Lighting
                                            poles to the NHAI project at
                                            Sambalpur ,Orissa.
                                          </td>
                                        </tr>
                                        <tr style="text-align: left">
                                          <th style="font-weight: normal">
                                            18
                                          </th>
                                          <td class="tb-ft">
                                            Supply Of Lighting Mast to the
                                            Project at Nashik
                                          </td>
                                        </tr>
                                        <tr style="text-align: left">
                                          <th style="font-weight: normal">
                                            19
                                          </th>
                                          <td class="tb-ft">
                                            Supply of Street Lighting Pole to
                                            WBHIDCO Projects
                                          </td>
                                        </tr>
                                        <tr style="text-align: left">
                                          <th style="font-weight: normal">
                                            20
                                          </th>
                                          <td class="tb-ft">
                                            Supply of Street Lighting Pole to
                                            PWD projects at Guwahati
                                          </td>
                                        </tr>
                                        <tr style="text-align: left">
                                          <td colspan="3">
                                            <div
                                              class="accordion js-accordion"
                                              style="
                                                padding-left: 0px;
                                                background-color: #f5f5f5;
                                              "
                                            >
                                              <div
                                                class="accordion__item js-accordion-item"
                                              >
                                                <div
                                                  class="accordion-header js-accordion-header"
                                                  style="text-align: left"
                                                >
                                                  EPC Division - High Mast and
                                                  Polygonal/Octagonal Pole
                                                </div>
                                                <div
                                                  class="accordion-body js-accordion-body"
                                                  style=""
                                                >
                                                  <div
                                                    class="accordion-body__contents"
                                                    style="padding: 0px"
                                                  >
                                                    <div
                                                      style="overflow-x: auto"
                                                    >
                                                      <div
                                                        style="
                                                          border: 1px solid #ddd;
                                                        "
                                                      >
                                                        <div class="divTable">
                                                          1
                                                        </div>
                                                        <div
                                                          class="tb-ft"
                                                          style="padding: 8px"
                                                        >
                                                          Hotel Parking area
                                                          lighting at Hindustan
                                                          Hotel
                                                        </div>
                                                      </div>
                                                      <div
                                                        style="
                                                          border: 1px solid #ddd;
                                                        "
                                                      >
                                                        <div class="divTable">
                                                          2
                                                        </div>
                                                        <div
                                                          class="tb-ft"
                                                          style="padding: 8px"
                                                        >
                                                          Green City Mission at
                                                          Budge Budge
                                                          Municipality
                                                        </div>
                                                      </div>
                                                      <div
                                                        style="
                                                          border: 1px solid #ddd;
                                                        "
                                                      >
                                                        <div class="divTable">
                                                          3
                                                        </div>
                                                        <div
                                                          class="tb-ft"
                                                          style="padding: 8px"
                                                        >
                                                          Area Lighting at
                                                          Kalyani University
                                                        </div>
                                                      </div>
                                                      <div
                                                        style="
                                                          border: 1px solid #ddd;
                                                        "
                                                      >
                                                        <div class="divTable">
                                                          4
                                                        </div>
                                                        <div
                                                          class="tb-ft"
                                                          style="padding: 8px"
                                                        >
                                                          Supply at Eastern
                                                          Railway, Asansol
                                                        </div>
                                                      </div>
                                                      <div
                                                        style="
                                                          border: 1px solid #ddd;
                                                        "
                                                      >
                                                        <div class="divTable">
                                                          5
                                                        </div>
                                                        <div
                                                          class="tb-ft"
                                                          style="padding: 8px"
                                                        >
                                                          Supply at Eastern
                                                          Railway, Asansol
                                                        </div>
                                                      </div>
                                                      <div
                                                        style="
                                                          border: 1px solid #ddd;
                                                        "
                                                      >
                                                        <div class="divTable">
                                                          6
                                                        </div>
                                                        <div
                                                          class="tb-ft"
                                                          style="padding: 8px"
                                                        >
                                                          Area Lighting at
                                                          Office of Deputy
                                                          Commissoner
                                                        </div>
                                                      </div>
                                                      <div
                                                        style="
                                                          border: 1px solid #ddd;
                                                        "
                                                      >
                                                        <div class="divTable">
                                                          7
                                                        </div>
                                                        <div
                                                          class="tb-ft"
                                                          style="padding: 8px"
                                                        >
                                                          3 camp area lighting
                                                          at HQ Eastern Command,
                                                          Panagarh
                                                        </div>
                                                      </div>
                                                      <div
                                                        style="
                                                          border: 1px solid #ddd;
                                                        "
                                                      >
                                                        <div class="divTable">
                                                          8
                                                        </div>
                                                        <div
                                                          class="tb-ft"
                                                          style="padding: 8px"
                                                        >
                                                          5 camp area lighting
                                                          at HQ Eastern Command,
                                                          Misa Camp
                                                        </div>
                                                      </div>
                                                      <div
                                                        style="
                                                          border: 1px solid #ddd;
                                                        "
                                                      >
                                                        <div class="divTable">
                                                          9
                                                        </div>
                                                        <div
                                                          class="tb-ft"
                                                          style="padding: 8px"
                                                        >
                                                          National Flag at DPS
                                                          School at Chukapalli
                                                          Shankar Rao
                                                          Educational Society
                                                        </div>
                                                      </div>
                                                      <div
                                                        style="
                                                          border: 1px solid #ddd;
                                                        "
                                                      >
                                                        <div class="divTable">
                                                          10
                                                        </div>
                                                        <div
                                                          class="tb-ft"
                                                          style="padding: 8px"
                                                        >
                                                          Flag Mast at 3 Railway
                                                          Station at Central
                                                          Railway, Pune
                                                        </div>
                                                      </div>
                                                      <div
                                                        style="
                                                          border: 1px solid #ddd;
                                                        "
                                                      >
                                                        <div class="divTable">
                                                          11
                                                        </div>
                                                        <div
                                                          class="tb-ft"
                                                          style="padding: 8px"
                                                        >
                                                          Supply at Southern
                                                          Railway, Chennai
                                                        </div>
                                                      </div>
                                                      <div
                                                        style="
                                                          border: 1px solid #ddd;
                                                        "
                                                      >
                                                        <div class="divTable">
                                                          12
                                                        </div>
                                                        <div
                                                          class="tb-ft"
                                                          style="padding: 8px"
                                                        >
                                                          Supply at Southern
                                                          Railway, Chennai
                                                        </div>
                                                      </div>
                                                      <div
                                                        style="
                                                          border: 1px solid #ddd;
                                                        "
                                                      >
                                                        <div class="divTable">
                                                          13
                                                        </div>
                                                        <div
                                                          class="tb-ft"
                                                          style="padding: 8px"
                                                        >
                                                          Supply at Nuclear
                                                          Power Corporation of
                                                          India Ltd
                                                        </div>
                                                      </div>
                                                      <div
                                                        style="
                                                          border: 1px solid #ddd;
                                                        "
                                                      >
                                                        <div class="divTable">
                                                          14
                                                        </div>
                                                        <div
                                                          class="tb-ft"
                                                          style="padding: 8px"
                                                        >
                                                          Area Lighting at
                                                          Office of Deputy
                                                          Commissone
                                                        </div>
                                                      </div>
                                                      <div
                                                        style="
                                                          border: 1px solid #ddd;
                                                        "
                                                      >
                                                        <div class="divTable">
                                                          15
                                                        </div>
                                                        <div
                                                          class="tb-ft"
                                                          style="padding: 8px"
                                                        >
                                                          Area Lighting at
                                                          Office of Deputy
                                                          Commissone
                                                        </div>
                                                      </div>
                                                      <div
                                                        style="
                                                          border: 1px solid #ddd;
                                                        "
                                                      >
                                                        <div class="divTable">
                                                          16
                                                        </div>
                                                        <div
                                                          class="tb-ft"
                                                          style="padding: 8px"
                                                        >
                                                          Area Lighting at
                                                          Office of Deputy
                                                          Commissone
                                                        </div>
                                                      </div>
                                                      <div
                                                        style="
                                                          border: 1px solid #ddd;
                                                        "
                                                      >
                                                        <div class="divTable">
                                                          17
                                                        </div>
                                                        <div
                                                          class="tb-ft"
                                                          style="padding: 8px"
                                                        >
                                                          Area Lighting at
                                                          Office of Deputy
                                                          Commissone
                                                        </div>
                                                      </div>
                                                      <div
                                                        style="
                                                          border: 1px solid #ddd;
                                                        "
                                                      >
                                                        <div class="divTable">
                                                          18
                                                        </div>
                                                        <div
                                                          class="tb-ft"
                                                          style="padding: 8px"
                                                        >
                                                          Flag Mast at 2 Railway
                                                          Station at South
                                                          Central Railway,
                                                          Guntur
                                                        </div>
                                                      </div>
                                                      <div
                                                        style="
                                                          border: 1px solid #ddd;
                                                        "
                                                      >
                                                        <div class="divTable">
                                                          19
                                                        </div>
                                                        <div
                                                          class="tb-ft"
                                                          style="padding: 8px"
                                                        >
                                                          Town ship and plant
                                                          lighting at Sagardighi
                                                          Thermal Power Plant
                                                        </div>
                                                      </div>
                                                      <div
                                                        style="
                                                          border: 1px solid #ddd;
                                                        "
                                                      >
                                                        <div class="divTable">
                                                          20
                                                        </div>
                                                        <div
                                                          class="tb-ft"
                                                          style="padding: 8px"
                                                        >
                                                          Flag Mast at 4 Railway
                                                          Station at East Coast
                                                          Railway, Khurda Road
                                                        </div>
                                                      </div>
                                                      <div
                                                        style="
                                                          border: 1px solid #ddd;
                                                        "
                                                      >
                                                        <div class="divTable">
                                                          21
                                                        </div>
                                                        <div
                                                          class="tb-ft"
                                                          style="padding: 8px"
                                                        >
                                                          Flag Mast at 3 at East
                                                          Coast Railway, Khurda
                                                          Road
                                                        </div>
                                                      </div>
                                                      <div
                                                        style="
                                                          border: 1px solid #ddd;
                                                        "
                                                      >
                                                        <div class="divTable">
                                                          22
                                                        </div>
                                                        <div
                                                          class="tb-ft"
                                                          style="padding: 8px"
                                                        >
                                                          Flag Mast at 6 Railway
                                                          Station at East Coast
                                                          Railway, Khurda Road
                                                        </div>
                                                      </div>
                                                      <div
                                                        style="
                                                          border: 1px solid #ddd;
                                                        "
                                                      >
                                                        <div class="divTable">
                                                          23
                                                        </div>
                                                        <div
                                                          class="tb-ft"
                                                          style="padding: 8px"
                                                        >
                                                          Flag Mast at 3 Railway
                                                          Station at Eastern
                                                          Railway, Sealdah
                                                          Division
                                                        </div>
                                                      </div>
                                                      <div
                                                        style="
                                                          border: 1px solid #ddd;
                                                        "
                                                      >
                                                        <div class="divTable">
                                                          24
                                                        </div>
                                                        <div
                                                          class="tb-ft"
                                                          style="padding: 8px"
                                                        >
                                                          Flag Mast at 3 Railway
                                                          Station at Eastern
                                                          Railway, Sealdah
                                                          Division
                                                        </div>
                                                      </div>
                                                      <div
                                                        style="
                                                          border: 1px solid #ddd;
                                                        "
                                                      >
                                                        <div class="divTable">
                                                          25
                                                        </div>
                                                        <div
                                                          class="tb-ft"
                                                          style="padding: 8px"
                                                        >
                                                          Flag Mast at 3 Railway
                                                          Station at Southern
                                                          Railway,
                                                          Tiruchchirappalli
                                                        </div>
                                                      </div>
                                                      <div
                                                        style="
                                                          border: 1px solid #ddd;
                                                        "
                                                      >
                                                        <div class="divTable">
                                                          26
                                                        </div>
                                                        <div
                                                          class="tb-ft"
                                                          style="padding: 8px"
                                                        >
                                                          Flag Mast at 4 Railway
                                                          Station at Southern
                                                          Railway,
                                                          Tiruchchirappalli
                                                        </div>
                                                      </div>
                                                      <div
                                                        style="
                                                          border: 1px solid #ddd;
                                                        "
                                                      >
                                                        <div class="divTable">
                                                          27
                                                        </div>
                                                        <div
                                                          class="tb-ft"
                                                          style="padding: 8px"
                                                        >
                                                          Supply at Power Grid
                                                          Corporation of India
                                                          Ltd, Satna
                                                        </div>
                                                      </div>
                                                      <div
                                                        style="
                                                          border: 1px solid #ddd;
                                                        "
                                                      >
                                                        <div class="divTable">
                                                          28
                                                        </div>
                                                        <div
                                                          class="tb-ft"
                                                          style="padding: 8px"
                                                        >
                                                          Flag Mast at 4 Railway
                                                          Station at South East
                                                          Central Railway,
                                                          Nagpur
                                                        </div>
                                                      </div>
                                                      <div
                                                        style="
                                                          border: 1px solid #ddd;
                                                        "
                                                      >
                                                        <div class="divTable">
                                                          29
                                                        </div>
                                                        <div
                                                          class="tb-ft"
                                                          style="padding: 8px"
                                                        >
                                                          Flag Mast at 4 Railway
                                                          Station at South East
                                                          Central Railway,
                                                          Nagpur
                                                        </div>
                                                      </div>
                                                      <div
                                                        style="
                                                          border: 1px solid #ddd;
                                                        "
                                                      >
                                                        <div class="divTable">
                                                          30
                                                        </div>
                                                        <div
                                                          class="tb-ft"
                                                          style="padding: 8px"
                                                        >
                                                          Flag Mast at 7 Railway
                                                          Station at South
                                                          Western Railway, Hubli
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div class="accordion__item js-accordion-item">
                              <div class="accordion-header js-accordion-header">
                                Railway Electrification Structure
                              </div>
                              <div
                                class="accordion-body js-accordion-body"
                                style=""
                              >
                                <div
                                  class="accordion-body__contents"
                                  style="padding: 0px"
                                >
                                  <div style="overflow-x: auto">
                                    <table
                                      class="specifi"
                                      style="text-align: left"
                                    >
                                      <tbody>
                                        <tr style="text-align: left">
                                          <th style="font-weight: normal">1</th>
                                          <td class="tb-ft">
                                            Re Project, New Jalpaiguri
                                          </td>
                                          <td class="tb-ft">
                                            180.59 RKM/303 TKM
                                          </td>
                                        </tr>
                                        <tr style="text-align: left">
                                          <th style="font-weight: normal">2</th>
                                          <td class="tb-ft">
                                            South Central Railway, Telangana
                                            State
                                          </td>
                                          <td class="tb-ft">
                                            46.941 KM/411 MT
                                          </td>
                                        </tr>
                                        <tr style="text-align: left">
                                          <th style="font-weight: normal">3</th>
                                          <td class="tb-ft">
                                            East Central Railway, Chopan
                                          </td>
                                          <td class="tb-ft">732 MT</td>
                                        </tr>
                                        <tr style="text-align: left">
                                          <th style="font-weight: normal">4</th>
                                          <td class="tb-ft">
                                            East Central Railway, Chainpur
                                          </td>
                                          <td class="tb-ft">542 MT</td>
                                        </tr>
                                        <tr style="text-align: left">
                                          <th style="font-weight: normal">5</th>
                                          <td class="tb-ft">
                                            North Western Railway, Ambala
                                          </td>
                                          <td class="tb-ft">607 RKM/727 TKM</td>
                                        </tr>
                                        <tr style="text-align: left">
                                          <th style="font-weight: normal">6</th>
                                          <td class="tb-ft">
                                            East Coast Railway
                                          </td>
                                          <td class="tb-ft">400 MT</td>
                                        </tr>
                                        <tr style="text-align: left">
                                          <th style="font-weight: normal">7</th>
                                          <td class="tb-ft">
                                            South Central Railway, Andhra
                                            Pradesh
                                          </td>
                                          <td class="tb-ft">88.775 KM</td>
                                        </tr>
                                        <tr style="text-align: left">
                                          <th style="font-weight: normal">8</th>
                                          <td class="tb-ft">
                                            Eastern Railway Under Re Project
                                            Kolkata
                                          </td>
                                          <td class="tb-ft">247 RKM/572 TKM</td>
                                        </tr>
                                        <tr style="text-align: left">
                                          <th style="font-weight: normal">9</th>
                                          <td class="tb-ft">
                                            South Central Railway-Guntakal
                                          </td>
                                          <td class="tb-ft">380 MT</td>
                                        </tr>
                                        <tr style="text-align: left">
                                          <th style="font-weight: normal">
                                            10
                                          </th>
                                          <td class="tb-ft">
                                            Southern Railway Under Re Chennai
                                            Project
                                          </td>
                                          <td class="tb-ft">105 RKM/125 TKM</td>
                                        </tr>
                                        <tr style="text-align: left">
                                          <th style="font-weight: normal">
                                            11
                                          </th>
                                          <td class="tb-ft">
                                            Eastern Railway Under Re Project
                                            Kolkata
                                          </td>
                                          <td class="tb-ft">
                                            72.74 RKM/160 TKM
                                          </td>
                                        </tr>
                                        <tr style="text-align: left">
                                          <th style="font-weight: normal">
                                            12
                                          </th>
                                          <td class="tb-ft">
                                            Northern And North Western Railway
                                            Under Re Project Jaipur
                                          </td>
                                          <td class="tb-ft">353 RKM/780 TKM</td>
                                        </tr>
                                        <tr style="text-align: left">
                                          <th style="font-weight: normal">
                                            13
                                          </th>
                                          <td class="tb-ft">
                                            Northern And North Western Railway
                                            Under Re Project Jaipur
                                          </td>
                                          <td class="tb-ft">353 RKM/780 TKM</td>
                                        </tr>
                                        <tr style="text-align: left">
                                          <th style="font-weight: normal">
                                            14
                                          </th>
                                          <td class="tb-ft">
                                            Tundla, Northern Railway
                                          </td>
                                          <td class="tb-ft">25 TKM</td>
                                        </tr>
                                        <tr style="text-align: left">
                                          <th style="font-weight: normal">
                                            15
                                          </th>
                                          <td class="tb-ft">
                                            Barang-Khurda Road,
                                            Barng-Rajathgarh, East Coast Railway
                                          </td>
                                          <td class="tb-ft">37 TKM</td>
                                        </tr>
                                        <tr style="text-align: left">
                                          <th style="font-weight: normal">
                                            16
                                          </th>
                                          <td class="tb-ft">
                                            Baneswar-Haldia , Haldia Energy
                                            Limited
                                          </td>
                                          <td class="tb-ft">10 TKM</td>
                                        </tr>
                                        <tr style="text-align: left">
                                          <th style="font-weight: normal">
                                            17
                                          </th>
                                          <td class="tb-ft">
                                            Khurda Road Khurda-Barang, East
                                            Coast Railway
                                          </td>
                                          <td class="tb-ft">50 TKM</td>
                                        </tr>
                                        <tr style="text-align: left">
                                          <th style="font-weight: normal">
                                            18
                                          </th>
                                          <td class="tb-ft">
                                            Pendikallu-Dhone-Guntur-Guntakal,
                                            South Central Railway
                                          </td>
                                          <td class="tb-ft">15 TKM</td>
                                        </tr>
                                        <tr style="text-align: left">
                                          <th style="font-weight: normal">
                                            19
                                          </th>
                                          <td class="tb-ft">
                                            Re Project Kolkata, Group 204
                                            ,Eastern Railway
                                          </td>
                                          <td class="tb-ft">572 TKM</td>
                                        </tr>
                                        <tr style="text-align: left">
                                          <th style="font-weight: normal">
                                            20
                                          </th>
                                          <td class="tb-ft">
                                            Ahmedabad ,North Western Railway
                                          </td>
                                          <td class="tb-ft">1000 TKM</td>
                                        </tr>
                                        <tr style="text-align: left">
                                          <th style="font-weight: normal">
                                            21
                                          </th>
                                          <td class="tb-ft">
                                            Bongaigaon-Guwahati ,Northeast
                                            Frontier Railway
                                          </td>
                                          <td class="tb-ft">275 TKM</td>
                                        </tr>
                                        <tr style="text-align: left">
                                          <th style="font-weight: normal">
                                            22
                                          </th>
                                          <td class="tb-ft">
                                            Re Project Jaipur,
                                            Delhi-Sarai-Rohilia-Rewari-Alwar-Jaipur-Phulera,
                                            Northern And North
                                          </td>
                                          <td class="tb-ft">780 TKM</td>
                                        </tr>
                                        <tr style="text-align: left">
                                          <th style="font-weight: normal">
                                            23
                                          </th>
                                          <td class="tb-ft">
                                            Roha-Verma Konkan Railway Project,
                                            Konkan Railway
                                          </td>
                                          <td class="tb-ft">62.5 TKM</td>
                                        </tr>
                                        <tr style="text-align: left">
                                          <th style="font-weight: normal">
                                            24
                                          </th>
                                          <td class="tb-ft">
                                            Western Dedicated Freight Corridor
                                            Emp-4 Project, North Western Railway
                                          </td>
                                          <td class="tb-ft">282 TKM</td>
                                        </tr>
                                        <tr style="text-align: left">
                                          <th style="font-weight: normal">
                                            25
                                          </th>
                                          <td class="tb-ft">
                                            L&amp;T-InabensaConsortium,
                                            Mughalsaraisection, Mirzapur, North
                                            Eastern Railway
                                          </td>
                                          <td class="tb-ft">94 TKM</td>
                                        </tr>
                                        <tr style="text-align: left">
                                          <th style="font-weight: normal">
                                            26
                                          </th>
                                          <td class="tb-ft">
                                            Sainthia-Rampurhat, Eastern Railway
                                          </td>
                                          <td class="tb-ft">3 TKM</td>
                                        </tr>
                                        <tr style="text-align: left">
                                          <th style="font-weight: normal">
                                            27
                                          </th>
                                          <td class="tb-ft">
                                            Gomti Nagar, North Eastern Railway
                                          </td>
                                          <td class="tb-ft">500 TKM</td>
                                        </tr>
                                        <tr style="text-align: left">
                                          <th style="font-weight: normal">
                                            28
                                          </th>
                                          <td class="tb-ft">
                                            Ntpc Kaniha Siding, East Coast
                                            Railway
                                          </td>
                                          <td class="tb-ft">100 TKM</td>
                                        </tr>
                                        <tr style="text-align: left">
                                          <th style="font-weight: normal">
                                            29
                                          </th>
                                          <td class="tb-ft">
                                            Rewari-Sadulpur-Hanumangarh &amp;
                                            Sadulpur-Ratangarh-Bikaner-Lalgarh
                                            Incl. Ratangarh-Sardarsahar Section
                                            Group 237 &amp; 238 In Bikaner
                                            Division , North Western Railway
                                          </td>
                                          <td class="tb-ft">727 TKM</td>
                                        </tr>
                                        <tr style="text-align: left">
                                          <th style="font-weight: normal">
                                            30
                                          </th>
                                          <td class="tb-ft">
                                            Fauha-Islampur, Group-229, East
                                            Central Railway
                                          </td>
                                          <td class="tb-ft">98 TKM</td>
                                        </tr>
                                        <tr style="text-align: left">
                                          <th style="font-weight: normal">
                                            31
                                          </th>
                                          <td class="tb-ft">
                                            Guwahati-Lumding Section, Group
                                            257-A , Northeast Frontier Railway
                                          </td>
                                          <td class="tb-ft">200 TKM</td>
                                        </tr>
                                        <tr style="text-align: left">
                                          <th style="font-weight: normal">
                                            32
                                          </th>
                                          <td class="tb-ft">
                                            Arakkonam,Southern Railway
                                          </td>
                                          <td class="tb-ft">100 TKM</td>
                                        </tr>
                                        <tr style="text-align: left">
                                          <th style="font-weight: normal">
                                            33
                                          </th>
                                          <td class="tb-ft">
                                            Narkatiagunj-Sugauli-Kaparpura,
                                            South Central Railway
                                          </td>
                                          <td class="tb-ft">100 TKM</td>
                                        </tr>
                                        <tr style="text-align: left">
                                          <th style="font-weight: normal">
                                            34
                                          </th>
                                          <td class="tb-ft">
                                            Narkatiagunj-Sugauli-Kaparpura, East
                                            Central Railway
                                          </td>
                                          <td class="tb-ft">261 TKM</td>
                                        </tr>
                                        <tr style="text-align: left">
                                          <th style="font-weight: normal">
                                            35
                                          </th>
                                          <td class="tb-ft">
                                            Bainchi-Palsit , Eastern Railway
                                          </td>
                                          <td class="tb-ft">6 TKM</td>
                                        </tr>
                                        <tr style="text-align: left">
                                          <th style="font-weight: normal">
                                            36
                                          </th>
                                          <td class="tb-ft">
                                            Mundagopal-Sitapur Section,
                                            Burhwal-Sitapur, Northern Railway
                                          </td>
                                          <td class="tb-ft">72 TKM</td>
                                        </tr>
                                        <tr style="text-align: left">
                                          <th style="font-weight: normal">
                                            37
                                          </th>
                                          <td class="tb-ft">
                                            Dankuni-Baruipara , Eastern Railway
                                          </td>
                                          <td class="tb-ft">2 TKM</td>
                                        </tr>
                                        <tr style="text-align: left">
                                          <th style="font-weight: normal">
                                            38
                                          </th>
                                          <td class="tb-ft">
                                            Chhapra Gramin Railway , East
                                            Central Railway
                                          </td>
                                          <td class="tb-ft">43 TKM</td>
                                        </tr>
                                        <tr style="text-align: left">
                                          <th style="font-weight: normal">
                                            39
                                          </th>
                                          <td class="tb-ft">
                                            Unnao-Balamau-Sitapur And
                                            Unnao-Dalamau-Unchahar, Group 242
                                            &amp; 243 , Northern Railway
                                          </td>
                                          <td class="tb-ft">330 TKM</td>
                                        </tr>
                                        <tr style="text-align: left">
                                          <th style="font-weight: normal">
                                            40
                                          </th>
                                          <td class="tb-ft">
                                            Nallapadu-Satuluru, Guntur-Guntakal,
                                            South Central Railway
                                          </td>
                                          <td class="tb-ft">300 TKM</td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div class="accordion__item js-accordion-item">
                              <div class="accordion-header js-accordion-header">
                                Transmission Tower
                              </div>
                              <div
                                class="accordion-body js-accordion-body"
                                style=""
                              >
                                <div
                                  class="accordion-body__contents"
                                  style="padding: 0px"
                                >
                                  <div style="overflow-x: auto">
                                    <table
                                      class="specifi"
                                      style="text-align: left"
                                    >
                                      <tbody>
                                        <tr style="text-align: left">
                                          <th style="font-weight: normal">1</th>
                                          <td class="tb-ft">
                                            Suppy 756kV D/C Tuticorin Pooling
                                            Station &amp; Salem Pooling Station
                                            (Part â€“ I &amp; Part - II)
                                            associated with LTOA Projects in
                                            Tuticorin Area Part for PGCIL
                                          </td>
                                        </tr>
                                        <tr style="text-align: left">
                                          <th style="font-weight: normal">2</th>
                                          <td class="tb-ft">
                                            Supply 220kV Towers for 96 MW
                                            Jorethang Loop Hydro Electric Power
                                            (JLHEP) Project, South Sikkim
                                          </td>
                                        </tr>
                                        <tr style="text-align: left">
                                          <th style="font-weight: normal">3</th>
                                          <td class="tb-ft">
                                            Supply 220kV Towers for 96 MW
                                            Tashiding Hydro Electric (THEP)
                                            Project, West Sikkim
                                          </td>
                                        </tr>
                                        <tr style="text-align: left">
                                          <th style="font-weight: normal">4</th>
                                          <td class="tb-ft">
                                            Supply 765kV S/C Horizontal &amp;
                                            Delta Configuration Towers,
                                            Extensions, Stubs, Bolts &amp; Nuts
                                            at Power Grid
                                          </td>
                                        </tr>
                                        <tr style="text-align: left">
                                          <th style="font-weight: normal">5</th>
                                          <td class="tb-ft">
                                            Supply of Towers for PGCIL TWb 1 for
                                            Balance work of 400kV D/C Silchar -
                                            Melriat Line, 132kV D/C Silchar -
                                            Melriat T/L and 132kV D/C Melriat -
                                            Shimui T/L &amp; 132kV D/C Melrait -
                                            Zimbawk T/L Projects
                                          </td>
                                        </tr>
                                        <tr style="text-align: left">
                                          <th style="font-weight: normal">6</th>
                                          <td class="tb-ft">
                                            Supply 400 KV S/S Structure for
                                            PGCIL
                                          </td>
                                        </tr>
                                        <tr style="text-align: left">
                                          <th style="font-weight: normal">7</th>
                                          <td class="tb-ft">
                                            Supply Towers, Extensions, Stubs,
                                            Bolts &amp; Nuts for 400kV &amp;
                                            220kV Transmission Lines for Power
                                            Grid
                                          </td>
                                        </tr>
                                        <tr style="text-align: left">
                                          <th style="font-weight: normal">8</th>
                                          <td class="tb-ft">
                                            Supply 132kV Towers for Nuapatna -
                                            Banki &amp; Bhadrak â€“ Anandpur
                                            Transmission Line Projects for OPTCL
                                          </td>
                                        </tr>
                                        <tr style="text-align: left">
                                          <th style="font-weight: normal">9</th>
                                          <td class="tb-ft">
                                            Supply 132 KV GRID SUBSTATION
                                            DIVISION, ASSAM ELECTRICITY GRID
                                            CORPORATION LTD
                                          </td>
                                        </tr>
                                        <tr style="text-align: left">
                                          <th style="font-weight: normal">
                                            10
                                          </th>
                                          <td class="tb-ft">
                                            Supply 110kV to GFPL
                                          </td>
                                        </tr>
                                        <tr style="text-align: left">
                                          <th style="font-weight: normal">
                                            11
                                          </th>
                                          <td class="tb-ft">
                                            Supply of 400kV M/C Towers to
                                            Kalpataru Power Transmission Limited
                                          </td>
                                        </tr>
                                        <tr style="text-align: left">
                                          <th style="font-weight: normal">
                                            12
                                          </th>
                                          <td class="tb-ft">
                                            Supply of 400kV M/C Towers to SPML
                                            Infra LTD.
                                          </td>
                                        </tr>
                                        <tr style="text-align: left">
                                          <th style="font-weight: normal">
                                            13
                                          </th>
                                          <td class="tb-ft">
                                            Supply Lattice Type Substation
                                            Structure Sterling and Wilson Pvt.
                                            Ltd.
                                          </td>
                                        </tr>
                                        <tr style="text-align: left">
                                          <th style="font-weight: normal">
                                            14
                                          </th>
                                          <td class="tb-ft">
                                            Supply of 400kV M/C Towers to OPTCL
                                          </td>
                                        </tr>
                                        <tr style="text-align: left">
                                          <th style="font-weight: normal">
                                            15
                                          </th>
                                          <td class="tb-ft">
                                            Supply of 220 Kv Tower for APTRANSCO
                                          </td>
                                        </tr>
                                        <tr style="text-align: left">
                                          <th style="font-weight: normal">
                                            16
                                          </th>
                                          <td class="tb-ft">
                                            Supply of 220kV D/C Towers JUNSL
                                          </td>
                                        </tr>
                                        <tr style="text-align: left">
                                          <th style="font-weight: normal">
                                            17
                                          </th>
                                          <td class="tb-ft">
                                            Supply of 132kV D/C Towers for JUSNL
                                          </td>
                                        </tr>
                                        <tr style="text-align: left">
                                          <th style="font-weight: normal">
                                            18
                                          </th>
                                          <td class="tb-ft">
                                            Supply of 400kV Towers, Tower
                                            Extensions, Stubs &amp; Cleats, Stub
                                            Setting Templates including Bolts,
                                            Nuts to U.P. Power Transmission
                                            Corporation Ltd.
                                          </td>
                                        </tr>
                                        <tr style="text-align: left">
                                          <th style="font-weight: normal">
                                            19
                                          </th>
                                          <td class="tb-ft">
                                            Supply of 400 kV Transmission Line
                                            Towers to Power Grid Corporation of
                                            India Ltd.
                                          </td>
                                        </tr>
                                        <tr style="text-align: left">
                                          <th style="font-weight: normal">
                                            20
                                          </th>
                                          <td class="tb-ft">
                                            Supply of 400 kv D/C Towers to Power
                                            Grid Corporation of India Ltd.
                                          </td>
                                        </tr>
                                        <tr style="text-align: left">
                                          <th style="font-weight: normal">
                                            21
                                          </th>
                                          <td class="tb-ft">
                                            Supply of 220kV Towers to Larsen
                                            &amp; Toubro LTD
                                          </td>
                                        </tr>
                                        <tr style="text-align: left">
                                          <th style="font-weight: normal">
                                            22
                                          </th>
                                          <td class="tb-ft">
                                            Supply of 132 kV Transmission Line
                                            Galvanised HT &amp; MS Towers for
                                            NCR Project for K. RAMACHANDRA RAO
                                            TRANSMISSION &amp; PROJECT PVT LTD.
                                          </td>
                                        </tr>
                                        <tr style="text-align: left">
                                          <th style="font-weight: normal">
                                            23
                                          </th>
                                          <td class="tb-ft">
                                            Supply of 132 kV Transmission Line
                                            Towers for Power Grid Corporation of
                                            India Ltd.
                                          </td>
                                        </tr>
                                        <tr style="text-align: left">
                                          <th style="font-weight: normal">
                                            24
                                          </th>
                                          <td class="tb-ft">
                                            Supply of 220kV &amp; 132 kV various
                                            types of Transmission Line Stubs
                                            &amp; Towers to Bihar Grid
                                            Corporation of India Ltd.
                                          </td>
                                        </tr>
                                        <tr style="text-align: left">
                                          <th style="font-weight: normal">
                                            25
                                          </th>
                                          <td class="tb-ft">
                                            Supply of RambÃ¸ll Design Telecom
                                            Towers to Reliance
                                          </td>
                                        </tr>
                                        <tr style="text-align: left">
                                          <th style="font-weight: normal">
                                            26
                                          </th>
                                          <td class="tb-ft">
                                            Roof Top Towers to Reliance Jio
                                            Infocom Limited
                                          </td>
                                        </tr>
                                        <tr style="text-align: left">
                                          <th style="font-weight: normal">
                                            27
                                          </th>
                                          <td class="tb-ft">
                                            Supply of 132kV &amp; 220kV of
                                            Transmission Towers to EKAKSHA
                                            INFRASTRUCTURE
                                          </td>
                                        </tr>
                                        <tr style="text-align: left">
                                          <th style="font-weight: normal">
                                            28
                                          </th>
                                          <td class="tb-ft">
                                            Supply of 132kV Tower Parts for
                                            BSPTCL Project to K. RAMACHANDRA RAO
                                            TRANSMISSION &amp; PROJECT PVT LTD.
                                          </td>
                                        </tr>
                                        <tr style="text-align: left">
                                          <th style="font-weight: normal">
                                            29
                                          </th>
                                          <td class="tb-ft">
                                            Supply of 132kV Transmission Line
                                            Galvanised HT &amp; MSTower Parts
                                            for NCR Project to K. RAMACHANDRA
                                            RAO TRANSMISSION &amp; PROJECT PVT
                                            LTD.
                                          </td>
                                        </tr>
                                        <tr style="text-align: left">
                                          <th style="font-weight: normal">
                                            30
                                          </th>
                                          <td class="tb-ft">
                                            Supply of Service Contract for Tower
                                            Package TW01 for 400 kV Transmission
                                            Lines to POWER GRID CORPORATION OF
                                            INDIA LTD
                                          </td>
                                        </tr>
                                        <tr style="text-align: left">
                                          <th style="font-weight: normal">
                                            31
                                          </th>
                                          <td class="tb-ft">
                                            Supply of Service Contract for Tower
                                            Package TW02 for 765kV Transmission
                                            Lines to POWER GRID CORPORATION OF
                                            INDIA LTD
                                          </td>
                                        </tr>
                                        <tr style="text-align: left">
                                          <th style="font-weight: normal">
                                            32
                                          </th>
                                          <td class="tb-ft">
                                            Supply of Spare Tower Parts and
                                            Bolts &amp; Nuts for 765kV
                                            Angul-Srikakulam D/C Line to POWER
                                            GRID CORPORATION OF INDIA LTD
                                          </td>
                                        </tr>
                                        <tr style="text-align: left">
                                          <th style="font-weight: normal">
                                            33
                                          </th>
                                          <td class="tb-ft">
                                            Supply of Spare Tower Parts and
                                            Bolts &amp; Nuts for 400kV Multi
                                            Circuit Line at Pandiabilli to POWER
                                            GRID CORPORATION OF INDIA LTD
                                          </td>
                                        </tr>
                                        <tr style="text-align: left">
                                          <th style="font-weight: normal">
                                            34
                                          </th>
                                          <td class="tb-ft">
                                            Supply of 132kV Tower &amp; Stubs to
                                            TEEMS INDIA TOWERLINES PVT. LTD.
                                          </td>
                                        </tr>
                                        <tr style="text-align: left">
                                          <th style="font-weight: normal">
                                            35
                                          </th>
                                          <td class="tb-ft">
                                            Supply of 220kV towers to BSPTCL
                                          </td>
                                        </tr>
                                        <tr style="text-align: left">
                                          <th style="font-weight: normal">
                                            36
                                          </th>
                                          <td class="tb-ft">
                                            SUPPLY OF 110 K to KERALA STATE
                                            ELECTRICITY BOARD
                                          </td>
                                        </tr>
                                        <tr style="text-align: left">
                                          <th style="font-weight: normal">
                                            37
                                          </th>
                                          <td class="tb-ft">
                                            Supply of 132kV Transmission Line
                                            Galvanised HT &amp; MSTower Parts
                                            for BSPTCL Project
                                          </td>
                                        </tr>
                                        <tr style="text-align: left">
                                          <th style="font-weight: normal">
                                            38
                                          </th>
                                          <td class="tb-ft">
                                            Supply TW01 for LILO of +800kV HVDC
                                            Bipole Agra Line at New Pooling
                                            Station in Alipurdwar, 132kV Earth
                                            Electrode Line at Alipurdwar and
                                            LILO of 220kV D/C Birpara â€“
                                            Salakati Line at New Pooling Station
                                            in Alipurdwar
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div style="clear: both"></div>
                        </div>
                      </div>

                      <div style="clear: both" class="padd-b30"></div>
                    </div>
                    <div style="clear: both"></div>
                  </div>

                  <div style="clear: both"></div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>

    <div style="clear: both"></div>
  </div>
</template>

<script>
import AppModal from "../UI/elements/AppModal.vue";
import Loader from "../../mixins/loader";
import NewProduct from "../products/NewProduct.vue";
import _ from "lodash";

export default {
  mixins: [Loader],
  components: {
    AppModal,
    NewProduct,
  },
  data() {
    return {
      activePage: {},
      products: {},
    };
  },
  mounted() {
    this.getProducts();
  },
  created() {
    setTimeout(async () => {
      const myElement = document.getElementById("resourceBody");
      myElement.innerHTML = this.activePage.similarItems;
    }, 4000);
  },
  methods: {
    async getProducts() {
      this.showLoader();
      setTimeout(async () => {
        this.products = await this.$store.dispatch("getProducts", {});
        for (let index in this.products) {
          if (
            this.products[index].pageLink ==
            "/resources/" + this.$route.params.id
          ) {
            this.activePage = this.products[index];
          }
        }
        this.hideLoader();
      }, 3000);
    },
  },
};
</script>

<style scoped></style>
