<template>
  <div class="background">
    <div class="container">
      <main id="table">
        <!-- NATALIA: tag, portfolio-->
        <section id="player-left" class="left player">
          <div class="off-turn">
            <span class="stats">
              <div class="info">
                <img src="../assets/img/natalia.png" class="pic" />
                <em class="name">Natalia</em>
                <em class="total show-round1">15</em>
                <em class="total show-round2">16</em>
                <em class="wallettotal onedigit">5</em>
                <span class="coins">
                  <em class="coin">1</em>
                  <em class="coin">1</em>
                  <em class="coin">1</em>
                </span>
              </div>
            </span>
          </div>
          <div class="on-turn">
            <div class="portfolio" id="portfolio-natalia">
              <div class="info">
                <img src="../assets/img/natalia.png" class="pic" />
                <em class="name">Natalia</em>
                <em class="total show-round1">15</em>
                <em class="total show-round2">16</em>
                <em class="wallettotal onedigit">5</em>
                <span class="coins">
                  <em class="coin">1</em>
                  <em class="coin">1</em>
                  <em class="coin">1</em>
                </span>
              </div>
              <span class="walletrow row">
                <img src="../assets/img/wallet-table.png" class="card wallet" />
                <img src="../assets/img/ETH-table.png" class="card" />
              </span>
              <span class="cardrow row">
                <img src="../assets/img/AAVE-table.png" class="card" />
                <img src="../assets/img/XMR-table.png" class="card" />
                <img src="../assets/img/SHIT-table.png" class="card" />
                <img src="../assets/img/SHIT-table.png" class="card" />
                <img src="../assets/img/SHIT-table.png" class="card" />
                <img src="../assets/img/SHIT-table.png" class="card show-round2" />
              </span>
            </div>
          </div>
        </section>

        <!-- ANDREA: tag, portfolio-->
        <section id="player-top" class="top player">
          <div class="off-turn">
            <span class="stats">
              <div class="info">
                <img src="../assets/img/andrea.png" class="pic" />
                <em class="name">Andrea</em>
                <em class="total show-round1">22</em>
                <em class="total show-round2">25</em>
                <em class="wallettotal">15</em>
                <span class="coins">
                  <em class="coin">1</em>
                  <em class="coin">1</em>
                  <em class="coin">1</em>
                </span>
              </div>
            </span>
          </div>
          <div class="on-turn">
            <div class="portfolio">
              <div class="info">
                <img src="../assets/img/andrea.png" class="pic" />
                <em class="name">Andrea</em>
                <em class="total show-round1">22</em>
                <em class="total show-round2">25</em>
                <em class="wallettotal">15</em>
                <span class="coins">
                  <em class="coin">1</em>
                  <em class="coin">1</em>
                  <em class="coin">1</em>
                </span>
              </div>
              <span class="walletrow row">
                <img src="../assets/img/wallet-table.png" class="card wallet" />
                <img src="../assets/img/BTC-table.png" class="card" />
                <img src="../assets/img/ETH-table.png" class="card" />
              </span>
              <span class="cardrow row">
                <img src="../assets/img/FIL-table.png" class="card show-round2" />
                <img src="../assets/img/LINK-table.png" class="card" />
                <img src="../assets/img/SHIT-table.png" class="card" />
                <img src="../assets/img/SHIT-table.png" class="card" />
                <img src="../assets/img/SHIT-table.png" class="card" />
                <img src="../assets/img/SHIT-table.png" class="card" />
              </span>
            </div>
          </div>
        </section>

        <!-- RON: tag, portfolio-->
        <section id="player-right" class="right player">
          <div class="off-turn">
            <span class="stats">
              <div class="info">
                <img src="../assets/img/ron.png" class="pic" />
                <em class="name">Ron</em>
                <em class="total">17</em>
                <em class="wallettotal show-round2">5</em>
                <span class="coins">
                  <em class="coin">3</em>
                  <em class="coin">1</em>
                  <em class="coin">1</em>
                </span>
              </div>
            </span>
          </div>
          <div class="on-turn">
            <div class="portfolio">
              <div class="info">
                <img src="../assets/img/ron.png" class="pic" />
                <em class="name">Ron</em>
                <em class="total">17</em>
                <em class="wallettotal show-round2">5</em>
                <span class="coins">
                  <em class="coin">3</em>
                  <em class="coin">1</em>
                  <em class="coin">1</em>
                </span>
              </div>
              <span class="walletrow row ronwallet" id="ron-wallet-ani">
                <img src="../assets/img/wallet-table.png" class="card wallet" />
                <img src="../assets/img/ETH-table.png" class="card" />
              </span>
              <span class="cardrow row">
                <img src="../assets/img/ETH-table.png" class="card" id="ethereum" />
                <img src="../assets/img/DOT-table.png" class="card" />
                <img src="../assets/img/ENJ-table.png" class="card" />
                <img src="../assets/img/MANA-table.png" class="card" />
                <img src="../assets/img/SHIT-table.png" class="card" />
                <img src="../assets/img/SHIT-table.png" class="card" />
              </span>
            </div>
          </div>
        </section>

        <!-- ME/STACK: notifications, stack, tag, hand, portfolio-->
        <section id="player-bottom" class="bottom player">
          <div id="stack" class="stack">
            <div class="notification-container">
              <span class="round1">
                <span id="notifi-round1-1" class="notifications">It's Natalia's turn</span>
                <span id="notifi-round1-2" class="notifications">Natalia is picking up an event card</span>
                <span id="notifi-round1-3" class="notifications">Waiting for Natalia to select a card to play</span>
              </span>
              <span class="round2">
                <span id="notifi-round2-1" class="notifications">It's your turn, please pick up an event card</span>
                <span id="notifi-round2-2" class="notifications">You redeem 3 coin cards</span>
                <span id="notifi-round2-2-2" class="notifications">You redeem 1 coin card</span>
              </span>
              <span class="round3">
                <span id="notifi-round3-1" class="notifications">It's Ron's turn</span>
                <span id="notifi-round3-2" class="notifications">Ron is picking up an event card</span>
                <span id="notifi-round3-3" class="notifications">Waiting for Ron to select a card to play</span>
                <span id="notifi-round3-4" class="notifications">Ron redeems 1 coin card</span>
              </span>
              <span class="round4">
                <span id="notifi-round4-1" class="notifications">It's Andrea's turn</span>
                <span id="notifi-round4-2" class="notifications">Andrea is picking up an event card</span>
                <span id="notifi-round4-3" class="notifications">Waiting for Andrea to select a card to play</span>
                <span id="notifi-round4-4" class="notifications">Andrea redeems 1 coin card</span>
              </span>
              <span class="round5">
                <span id="notifi-round5-1" class="notifications">It's Natalia's turn</span>
                <span id="notifi-round5-2" class="notifications">Natalia is picking up an event card</span>
                <span id="notifi-round5-3" class="notifications">Waiting for Natalia to select a card to play</span>
                <span id="notifi-round5-4" class="notifications">Natalia redeems 1 coin card</span>
              </span>
            </div>
            <img src="../assets/img/anverso-questions.png" class="card" id="questionstack" />
            <img src="../assets/img/anverso-coins.png" class="card" id="cardstack" />
            <div class="cardstack" id="cardstack-ani">
              <img src="../assets/img/anverso-coins.png" class="card" />
              <img src="../assets/img/anverso-coins.png" class="card" />
              <img src="../assets/img/anverso-coins.png" class="card" />
            </div>
          </div>
          <div class="off-turn">
            <span class="stats">
              <div class="info">
                <em class="total show-round1">15</em>
                <em class="total show-round2">20</em>
                <em class="wallettotal">18</em>
                <span class="coins">
                  <em class="coin show-round1">3</em>
                  <em class="coin show-round3">3</em>
                  <em class="coin show-round2">1</em>
                  <em class="coin">1</em>
                  <em class="coin">1</em>
                </span>
              </div>
            </span>
            <span class="hand">
              <img src="../assets/img/wallet-hand.png" class="card" />
              <img src="../assets/img/keys-hand.png" class="card" />
              <img src="../assets/img/q2-hand.png" class="card" />
            </span>
          </div>
          <div class="on-turn">
            <div class="portfolio">
              <div class="info">
                <em class="total show-round1">15</em>
                <em class="total show-round2">20</em>
                <em class="wallettotal">18</em>
                <span class="coins">
                  <em class="coin show-round1">3</em>
                  <em class="coin show-round3">3</em>
                  <em class="coin show-round2">1</em>
                  <em class="coin">1</em>
                  <em class="coin">1</em>
                </span>
              </div>
              <span class="walletrow row">
                <img src="../assets/img/wallet-table.png" class="card wallet" />
                <img src="../assets/img/BTC-table.png" class="card" />
              </span>
              <span class="cardrow row">
                <img src="../assets/img/UNI-table.png" class="card" />
                <img src="../assets/img/SHIT-table.png" class="card" />
                <img src="../assets/img/SHIT-table.png" class="card" />
              </span>
            </div>
          </div>
        </section>
      </main>

      <!-- OVERLAY -->
      <div id="overlay" class="overlay">
        <!-- NATALIA: show played kard (keys) -->
        <aside id="aside-round1-natalia" class="round1" style="display: none">
          <section id="over-now-playing" class="over-nowplaying">
            Now playing:
            <img src="../assets/img/natalia.png" class="pic" />
            <em class="name">Natalia</em>
          </section>
          <div id="round1-natalia-step1" class="step1" style="display: none">
            <section id="over-notifications-container" class="over-notifications">
              <span id="over-notifi1" class="notifications show"> Natalia played the following card:</span>
              <span id="over-notifi2" class="notifications" style="display: none"> This card affects you</span>

              <span id="over-notifi3" class="notifications" style="display: none"
                >Please select 3 coin cards to give up</span
              >

              <span id="over-notifi4" class="button" style="display: none" onclick="round1_natalia_3();"
                >Go to portfolio</span
              >
            </section>
            <section id="over-main" class="over-content">
              <img src="../assets/img/keys-full.png" class="card full" />
            </section>
          </div>
          <!-- NATALIA -> ME: select 3 cards to give up from portfolio -->
          <div id="round1-natalia-step2" class="step2" style="display: none">
            <section id="now-viewing" class="over-nowviewing">
              Now viewing portfolio:
              <em class="name">mine</em>
            </section>
            <section id="over-notifications-container" class="over-notifications" style="min-height: 60px">
              <span id="select-not1" class="notifications show"> Please choose cards to give up</span>
              <span id="select-not2" class="button pulsate" style="display: none" onclick="round1_me_1(true)"
                >Confirm choice</span
              >
            </section>
            <section id="over-main" class="over-select">
              <span class="cardholder"><img src="../assets/img/SHIT-select.png" class="card" id="selectcard1" /></span>
              <span class="cardholder"><img src="../assets/img/SHIT-select.png" class="card" id="selectcard2" /></span>
              <span class="cardholder"><img src="../assets/img/SHIT-select.png" class="card" id="selectcard3" /></span>
            </section>
            <section id="over-main" class="over-portfolio">
              <div class="portfolio">
                <span class="walletrow row">
                  <img src="../assets/img/wallet-table.png" class="card wallet" />
                  <img src="../assets/img/coin-table.png" class="card" />
                  <img src="../assets/img/UNI-table.png" class="card" />
                </span>
                <span class="cardrow row">
                  <img src="../assets/img/ATOM-table.png" class="card" />
                  <img src="../assets/img/SHIT-table.png" class="card" />
                  <img src="../assets/img/SHIT-table.png" class="card" />
                  <img
                    src="../assets/img/SHIT-table.png"
                    class="card"
                    onclick="this.style.display='none'; show_selectd_card('selectcard3');showNextNotification('select-not1', 'select-not2');"
                  />
                  <img
                    src="../assets/img/SHIT-table.png"
                    class="card"
                    onclick="this.style.display='none'; show_selectd_card('selectcard2');"
                  />
                  <img
                    src="../assets/img/SHIT-table.png"
                    class="card"
                    onclick="this.style.display='none'; show_selectd_card('selectcard1');"
                  />
                </span>
              </div>
            </section>
          </div>
        </aside>

        <!-- ME: show hand, portfolio button -->
        <aside id="aside-round1-me" class="round2" style="display: none">
          <section id="over-now-playing" class="over-nowplaying">
            Now playing:
            <em class="name">Me</em>
            <div class="portfolio-viewer">
              <span class="button show" onclick="toggle_dropdown()">View portfolio</span>
              <div class="dropdown" id="dropdown" onclick="toggle_dropdown()">
                <span class="dropdown-button" onclick="show_portfolio('me')">Me</span>
                <span class="dropdown-button" onclick="show_portfolio('ron')">Ron (next)</span>
                <span class="dropdown-button" onclick="show_portfolio('andrea')">Andrea</span>
                <span class="dropdown-button" onclick="show_portfolio('natalia')">Natalia</span>
              </div>
            </div>
          </section>
          <section id="now-viewing" class="over-nowviewing">
            Now viewing:
            <em class="name">my hand</em>
          </section>
          <div id="round1-me-step1" class="step1" style="display: none">
            <section id="over-notifications-container" class="over-notifications">
              <span id="over-me-notifi1" class="notifications">Please choose which card to play</span>
              <span id="over-me-not2" class="button pulsate" style="display: none" onclick="round1_me_3()"
                >Confirm choice</span
              >
            </section>
            <section id="over-main" class="over-grid">
              <img
                src="../assets/img/u1-grid.png"
                class="card ggrid newcard"
                id="new-on-hand1"
                onclick="toggle_pulsate(this); showNextNotification('over-me-notifi1', 'over-me-not2');"
              />
              <img
                src="../assets/img/wallet-grid.png"
                class="card ggrid"
                onclick="toggle_pulsate(this); showNextNotification('over-me-notifi1', 'over-me-not2');"
              />
              <img
                src="../assets/img/keys-grid.png"
                class="card ggrid"
                onclick="toggle_pulsate(this); showNextNotification('over-me-notifi1', 'over-me-not2');"
              />
              <img
                src="../assets/img/q2-grid.png"
                class="card ggrid"
                onclick="toggle_pulsate(this); showNextNotification('over-me-notifi1', 'over-me-not2');"
              />
            </section>
          </div>
          <div id="round1-me-step2" class="step1" style="display: none">
            <section id="over-notifications-container" class="over-notifications">
              <span id="over-me-notifi1-2x" class="notifications">Please choose which card to play</span>
              <span id="over-me-not2-2x" class="button pulsate" style="display: none" onclick="round1_me_3_2()"
                >Confirm choice</span
              >
            </section>
            <section id="over-main" class="over-grid">
              <img
                src="../assets/img/q3-grid.png"
                class="card ggrid newcard"
                id="new-on-hand2"
                onclick="toggle_pulsate(this); showNextNotification('over-me-notifi1-2x', 'over-me-not2-2x');"
              />
              <img
                src="../assets/img/wallet-grid.png"
                class="card ggrid"
                onclick="toggle_pulsate(this); showNextNotification('over-me-notifi1-2x', 'over-me-not2-2x');"
              />
              <img
                src="../assets/img/keys-grid.png"
                class="card ggrid"
                onclick="toggle_pulsate(this); showNextNotification('over-me-notifi1-2x', 'over-me-not2-2x');"
              />
              <img
                src="../assets/img/q2-grid.png"
                class="card ggrid"
                onclick="toggle_pulsate(this); showNextNotification('over-me-notifi1-2x', 'over-me-not2-2x');"
              />
            </section>
          </div>
        </aside>

        <!-- ME: show 1 newly picked up card -->
        <aside id="aside-round2-me-2" class="round2" style="display: none">
          <section id="over-now-playing" class="over-nowplaying">
            Now playing:
            <em class="name">Me</em>
          </section>
          <div class="step1">
            <section id="over-notifications-container" class="over-notifications">
              <span id="over-me-notifi-2-1" class="notifications">You picked up the following card</span>
            </section>
            <section id="over-main" class="over-grid">
              <img src="../assets/img/SHIT-full.png" class="card full" />
            </section>
          </div>
        </aside>

        <!-- ME: show 3 newly picked up cards -->
        <aside id="aside-round2-me" class="round2" style="display: none">
          <section id="over-now-playing" class="over-nowplaying">
            Now playing:
            <em class="name">Me</em>
          </section>
          <div class="step1">
            <section id="over-notifications-container" class="over-notifications">
              <span id="over-me-notifi-2-1-3cards" class="notifications">You picked up the following cards</span>
            </section>
            <section id="over-main" class="over-grid">
              <img src="../assets/img/ATOM-grid.png" class="card grid" />
              <img src="../assets/img/SHIT-grid.png" class="card grid" />
              <img src="../assets/img/SHIT-grid.png" class="card grid" />
            </section>
          </div>
        </aside>

        <!-- RON:  show played card (question and wallet) -->
        <aside id="aside-round1-ron" class="round1" style="display: none">
          <section id="over-now-playing" class="over-nowplaying">
            Now playing:
            <img src="../assets/img/ron.png" class="pic" />
            <em class="name">Ron</em>
          </section>
          <div id="round1-ron-step1" class="step1" style="display: none">
            <section id="over-notifications-container" class="over-notifications">
              <span id="over-ron-notifi1" class="notifications show"> Ron played the following card:</span>
            </section>
            <section id="over-main" class="over-content">
              <img src="../assets/img/q4-full.png" class="card full" />
            </section>
          </div>
          <div id="round1-ron-step1-2" class="step1" style="display: none">
            <section id="over-notifications-container" class="over-notifications">
              <span id="over-ron-notifi1-2" class="notifications show"> Ron played the following card:</span>
              <span id="over-ron-notifi2-2" class="notifications" style="display: none"
                >Since you have a wallet in your portfolio,</span
              >
              <span id="over-ron-notifi3-2" class="notifications" style="display: none"
                >you too can now add one more card</span
              >
              <span id="over-notifi4-2" class="button" onclick="round1_ron_2_3();">Go to portfolio</span>
            </section>
            <section id="over-main" class="over-content">
              <img src="../assets/img/wallet-full.png" class="card full" />
            </section>
          </div>
          <div id="round1-ron-step1-3" class="step2" style="display: none">
            <section id="now-viewing" class="over-nowviewing">
              Now viewing portfolio:
              <em class="name">mine</em>
            </section>
            <section id="over-notifications-container" class="over-notifications" style="min-height: 60px">
              <span id="select-not1-ron2" class="notifications show"> Please choose cards to add to wallet</span>
              <span id="select-not2-ron2" class="button pulsate" style="display: none" onclick="round1_ron_2_4()"
                >Confirm choice</span
              >
            </section>
            <section id="over-main" class="over-portfolio">
              <div class="portfolio">
                <span class="walletrow row select" id="walletcontainer">
                  <img src="../assets/img/wallet-select.png" class="card wallet" />
                  <img src="../assets/img/BTC-select.png" class="card" />
                  <span class="cardholder"
                    ><img src="../assets/img/UNI-select.png" class="card" id="selectcard1"
                  /></span>
                </span>
                <span class="cardrow row">
                  <img
                    src="../assets/img/UNI-table.png"
                    class="card"
                    onclick="this.style.display='none'; show_select_wallet();"
                  />
                  <img src="../assets/img/ATOM-table.png" class="card" />
                  <img src="../assets/img/SHIT-table.png" class="card" />
                  <img src="../assets/img/SHIT-table.png" class="card" />
                  <img src="../assets/img/SHIT-table.png" class="card" />
                  <img src="../assets/img/SHIT-table.png" class="card" />
                  <img src="../assets/img/SHIT-table.png" class="card" />
                </span>
              </div>
            </section>
          </div>
        </aside>

        <!-- RON:  show 1 newly picked up coin card -->
        <aside id="aside-round1-ron-2" class="round1" style="display: none">
          <section id="over-now-playing" class="over-nowplaying">
            Now playing:
            <img src="../assets/img/ron.png" class="pic" />
            <em class="name">Ron</em>
          </section>
          <div id="round1-ron-step2" class="step1" style="display: none">
            <section id="over-notifications-container" class="over-notifications">
              <span id="over-ron-notifi1" class="notifications show">Ron picked up the following card</span>
            </section>
            <section id="over-main" class="over-content">
              <img src="../assets/img/DOGE-full.png" class="card full" />
            </section>
          </div>
        </aside>

        <!-- ANDREA: show played card (question) -->
        <aside id="aside-round1-andrea" class="round1" style="display: none">
          <section id="over-now-playing" class="over-nowplaying">
            Now playing:
            <img src="../assets/img/andrea.png" class="pic" />
            <em class="name">Andrea</em>
          </section>
          <div id="round1-andrea-step1" class="step1" style="display: none">
            <section id="over-notifications-container" class="over-notifications">
              <span id="over-andrea-notifi1" class="notifications show"> Andrea played the following card:</span>
            </section>
            <section id="over-main" class="over-content">
              <img src="../assets/img/q6-full.png" class="card full show-round1" />
              <img src="../assets/img/q7-full.png" class="card full show-round2" />
            </section>
          </div>
        </aside>

        <!-- ANDREA:  show 1 newly picked up coin card -->
        <aside id="aside-round1-andrea-2" class="round1" style="display: none">
          <section id="over-now-playing" class="over-nowplaying">
            Now playing:
            <img src="../assets/img/andrea.png" class="pic" />
            <em class="name">Andrea</em>
          </section>
          <div id="round1-andrea-step2" class="step1" style="display: none">
            <section id="over-notifications-container" class="over-notifications">
              <span id="over-andrea-notifi1" class="notifications show">Andrea picked up the following card</span>
            </section>
            <section id="over-main" class="over-content">
              <img src="../assets/img/FIL-full.png" class="card full show-round1" />
              <img src="../assets/img/SHIT-full.png" class="card full show-round2" />
            </section>
          </div>
        </aside>

        <!-- NATALIA: show played card (question) -->
        <aside id="aside-round1-natalia-2" class="round1" style="display: none">
          <section id="over-now-playing" class="over-nowplaying">
            Now playing:
            <img src="../assets/img/natalia.png" class="pic" />
            <em class="name">Natalia</em>
          </section>
          <div id="round1-natalia-step1-2" class="step1" style="display: none">
            <section id="over-notifications-container" class="over-notifications">
              <span id="over-natalia-notifi1-2" class="notifications show"> Natalia played the following card:</span>
            </section>
            <section id="over-main" class="over-content">
              <img src="../assets/img/q1-full.png" class="card full" />
            </section>
          </div>
        </aside>

        <!-- NATALIA:  show 1 newly picked up coin card -->
        <aside id="aside-round1-natalia-2-2" class="round1" style="display: none">
          <section id="over-now-playing" class="over-nowplaying">
            Now playing:
            <img src="../assets/img/natalia.png" class="pic" />
            <em class="name">Natalia</em>
          </section>
          <div id="round1-natalia-step2-2" class="step1" style="display: none">
            <section id="over-notifications-container" class="over-notifications">
              <span id="over-natalia-notifi1-2-2" class="notifications show">Natalia picked up the following card</span>
            </section>
            <section id="over-main" class="over-content">
              <img src="../assets/img/SHIT-full.png" class="card full" />
            </section>
          </div>
        </aside>

        <!-- ME: show portfolio, back button -->
        <aside id="portfolio-viewer-me" class="portfolio-viewer" style="display: none">
          <section id="over-nportfolio-me-playing" class="over-nowplaying">
            Now playing:
            <em class="name">Me</em>
            <div class="portfolio-viewer">
              <span class="button show" onclick="round1_me_2()">Back</span>
            </div>
          </section>
          <section id="now-viewing" class="over-nowviewing">
            Now viewing portfolio:
            <em class="name">mine</em>
          </section>
          <section id="over-main" class="over-portfolio">
            <div class="portfolio">
              <span class="walletrow row">
                <img src="../assets/img/wallet-table.png" class="card wallet" />
                <img src="../assets/img/BTC-table.png" class="card" />
              </span>
              <span class="cardrow row">
                <img src="../assets/img/UNI-table.png" class="card" />
                <img src="../assets/img/SHIT-table.png" class="card" />
                <img src="../assets/img/SHIT-table.png" class="card" />
              </span>
            </div>
          </section>
        </aside>
      </div>
    </div>
  </div>
</template>
<script>
import init from '@/store/config.js'
import store from '../store/index'
import { createGameDeck } from '../backend/functions.js'
export default {
  name: 'Demo',
  components: {},
  mounted() {
    console.log('demo')
    //console.log(this.$store)
    let demoScriot = document.createElement('script')
    demoScriot.setAttribute('src', '../script.js')
    document.head.appendChild(demoScriot)

    this.initNewGame()
  },
  methods: {
    initNewGame() {
      let gameHost = this.$store.state.common.wallet.selectedAddress
      //console.log('gameHost ' + gameHost)
      // to add oracles for getting other player's addresses
      var playersArray = [gameHost, 'player 2']
      var initialGameDeck = createGameDeck(gameHost, playersArray)
      var stateGameDeck = {
        turn: 0,
        coinCards: initialGameDeck.coinCardsArray,
        eventCards: initialGameDeck.eventCardsArray,
        players: playersArray,
      }
      this.$store.state.gameDeck = stateGameDeck
      //console.log('state gameDeck ' + JSON.stringify(this.$store.state.gameDeck))
    },
  },
}
</script>

<style scoped lang="scss">
@import '../scss/variables';
.top-margin {
  margin-top: 5%;
}
.wide {
  width: 220px;
  height: 60px;
}
.logo {
  margin-top: 10%;
  width: 50%;
}
.sp-fill {
  padding-top: 0;
}
.wallet {
  position: relative;
  text-align: center;
}
.sp-wallet-create {
  width: 100%;
}
.image {
  width: 25%;
  height: 25%;
}
.title {
  font-size: 50px;
  font-family: $font-family;
  padding-top: 35px;
  font-weight: bold;
}
.container {
  padding: 20px 10%;
  text-align: center;
}
.background {
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: white;
}
body {
  background-color: #eee;
  text-align: center;
  font-family: 'Oswald', sans-serif;
}

img.card {
  box-shadow: 0px 0px 20px -3px rgb(0 0 0 / 40%);
  border-radius: 8%;
}
.card.full {
  width: 270px;
}
.card.ggrid {
  width: 150px;
  margin: 5px;
}
.card.ggrid.newcard {
  position: relative;
  top: -50px;
}
.card.ggrid.newcard.slidein {
  top: 0;
  transition: all 0.2s 0s ease-in;
}

.off-turn {
  position: relative;
  z-index: 1;
}

.left,
.right,
.top {
  position: relative;
  top: 15px;
}

.playing .stats {
  display: none;
}
.stats {
  background-color: #9e93ff;
  box-shadow: 0px 0px 20px -3px rgba(0, 0, 0, 0.4);
  border-radius: 10px;
  display: inline-block;
  position: fixed;
}
.left .stats {
  height: 170px;
  left: -10px;
  top: 20%;
  width: 50px;
}
.top .stats {
  height: 50px;
  margin-left: -85px;
  top: -10px;
  width: 170px;
}
.right .stats {
  height: 170px;
  left: auto;
  right: -10px;
  top: 20%;
  width: 50px;
}
.bottom .stats {
  bottom: -10px;
  height: 50px;
  margin-left: -160px;
  width: 140px;
}

.left .stats .info,
.right .stats .info,
.left .stats .info .coins {
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 95%;
}

.bottom .hand {
  bottom: -100px;
  margin-left: 42px;
  position: fixed;
}
.bottom.playing .hand {
  bottom: 35%;
  margin-left: -54px;
  transition: bottom 0.2s 0.2s ease-in;
}

.bottom .hand img {
  margin-left: -65px;
}
.bottom.playing .hand img {
  margin-left: -50px;
}

.stack {
  position: fixed;
  bottom: 85px;
  left: 50%;
  margin-left: -130px;
}

.playing .stack {
  bottom: auto;
  top: 70px;
}

.stack img {
  height: auto;
  width: 120px;
  margin: 0 5px;
}

.stack .cardstack {
  display: inline-block;
  opacity: 0;
  position: relative;
  top: -176px;
}

.stack .cardstack.pulsate {
  opacity: 1;
}

.stack .cardstack img {
  position: absolute;
  height: auto;
  width: 120px;
  margin: 0 5px;
  top: 0;
  right: 0;
}
.stack .cardstack.pulsate.card-1 img:last-child {
  top: -20px;
  right: 30px;
  transition: all 0.7s 0s ease-out;
}

.stack .cardstack.pulsate.card-3 img {
  top: -40px;
  right: 60px;
  transition: all 0.7s 0s ease-out;
}
.stack .cardstack.pulsate.card-3 img:first-child {
  top: -20px;
  right: 30px;
  transition: all 0.7s 0s ease-out;
}
.stack .cardstack.pulsate.card-3 img:last-child {
  top: -60px;
  right: 90px;
  transition: all 0.7s 0s ease-out;
}

.playing .stack .cardstack.pulsate.card-1 img:last-child {
  top: 20px;
  right: 30px;
  transition: all 0.7s 0s ease-out;
}
.playing .stack .cardstack.pulsate.card-3 img {
  top: 40px;
  right: 60px;
  transition: all 0.7s 0s ease-out;
}
.playing .stack .cardstack.pulsate.card-3 img:first-child {
  top: 20px;
  right: 30px;
  transition: all 0.7s 0s ease-out;
}
.playing .stack .cardstack.pulsate.card-3 img:last-child {
  top: 60px;
  right: 90px;
  transition: all 0.7s 0s ease-out;
}

.pulsate {
  box-shadow: 0px 0px 20px 0px #9e93ff;
  animation: pulsate 1s ease-out infinite;
}
@keyframes pulsate {
  0% {
    box-shadow: 0 0 0 #9e93ff;
  }
  50% {
    box-shadow: 0 0 30px #9e93ff;
  }
  100% {
    box-shadow: 0 0 0 #9e93ff;
  }
}
.overlay .card.pulsate {
  box-shadow: 0px 0px 30px 0px #9e93ff;
  animation: pulsate-more 1s ease-out infinite;
}
@keyframes pulsate-more {
  0% {
    box-shadow: 0 0 0 #9e93ff;
  }
  50% {
    box-shadow: 0 0 30px 10px #9e93ff;
  }
  100% {
    box-shadow: 0 0 0 #9e93ff;
  }
}

.info {
  margin: 3px 5px;
}
.bottom .info {
  margin: 5px;
}
.left .stats .info {
  margin: 10px 0 0 8px;
}
.top .stats .info {
  margin: 12px 5px 5px;
}
.right .stats .info {
  margin: 10px 0 0 -10px;
}
.portfolio .info {
  margin: 15px 0 35px -25px;
}

.info em {
  font-size: 14px;
  font-style: normal;
  line-height: 1;
  padding: 7px 5px;
}

.info .pic {
  border-radius: 50%;
  height: auto;
  vertical-align: middle;
  width: 25px;
  position: relative;
  top: -3px;
}
.portfolio .info .pic {
  vertical-align: middle;
  border-radius: 25px;
  width: 50px;
}

.info .name {
  display: none;
}
.portfolio .info .name {
  display: inline;
}

.top .info .total,
.bottom .info .total,
.portfolio .info .total {
  border-right: 1px solid #000;
}
.left .info .total,
.right .info .total {
  border-bottom: 1px solid #000;
  margin-bottom: 20px;
}
.portfolio .info .total {
  border-bottom: none;
}

.right .portfolio .info .total {
  margin-right: 20px;
}
.playing.right .portfolio .info .total {
  margin-right: 20px;
  padding-right: 10px;
}

.info .wallettotal {
  color: #fff;
  background-image: url(../assets/img/lock-violet.png);
  background-position: 5px 0px;
  background-repeat: no-repeat;
  background-size: 22px;
  padding: 7px 0 15px 10px;
  position: relative;
  bottom: -2px;
  margin-right: -15px;
}
.info .wallettotal:after {
  background-image: url(../assets/img/lock-violet.png);
  background-position: 0px 0px;
  background-repeat: no-repeat;
  background-size: 22px;
  content: '';
  display: inline-block;
  height: 25px;
  left: -14px;
  opacity: 0;
  position: relative;
  top: 0px;
  width: 25px;
  width: 22px;
  z-index: -1;
}
.portfolio .info .wallettotal.onedigit {
  padding-left: 12px;
}

.portfolio .info .wallettotal {
  background-image: url(../assets/img/lock-grey.png);
}
.portfolio .info .wallettotal:after {
  background-image: url(../assets/img/lock-grey.png);
}
.left .info .wallettotal,
.right .info .wallettotal {
  background-position: 5px center;
  padding: 10px 0 15px 10px;
}
.left .stats .info .wallettotal,
.right .stats .info .wallettotal {
  background-position: 2px 11px;
  margin-top: -25px;
}
.right .portfolio .wallettotal.show-round2 {
  padding: 10px 15px 15px 13px;
}
.portfolio .info .wallettotal {
  padding: 7px 10px 0px 10px;
}
.right .info .wallettotal:after {
  top: 1px;
  left: -13px;
}

.info .coins {
  padding: 0 0 0 10px;
}
.left .info .coins {
  padding: 0;
}
.right .info .coins {
  padding: 0 0 0 2px;
}
.left .info .coins .coin,
.right .info .coins .coin {
  margin-top: -6px;
  margin-left: 0;
  padding: 3px 7px;
  display: block;
  line-height: 1;
}
.portfolio .info .coins .coin {
  display: inline;
  margin-left: -8px;
  padding: 0 7px;
}
.info .coins .coin {
  background-color: #9e93ff;
  border-radius: 10px;
  border: 1px solid #000;
  line-height: 1.4;
  margin-left: -8px;
  padding: 0 7px;
}
.portfolio .info .coin {
  background-color: #f5f5f5;
}

.on-turn {
  position: fixed;
  top: 0;
}
.playing .on-turn {
  transition: all 0.2s 0.2s ease-in;
}
.top .on-turn {
  height: 0;
  left: 10px;
  margin-top: -100%;
  width: calc(100% - 20px);
}
.playing.top .on-turn {
  height: calc(90% + 15px);
  margin-top: 0;
}
.left .on-turn {
  left: -10px;
  margin-left: -100%;
  width: calc(100% - 0px);
}
.playing.left .on-turn {
  margin-left: 0;
  top: 10px;
  height: calc(90% - 15px);
}
.bottom .on-turn {
  bottom: 0;
  left: 10px;
  margin-bottom: -100%;
  top: auto;
  width: calc(100% - 20px);
}
.playing.bottom .on-turn {
  margin-bottom: 0;
  height: 40%;
}
.right .on-turn {
  right: -10px;
  margin-right: -100%;
  width: calc(100% - 0px);
}
.playing.right .on-turn {
  margin-right: 0;
  top: 10px;
  height: calc(90% - 15px);
}

.portfolio {
  background-color: #f5f5f5;
  border-radius: 10px;
  box-shadow: 0px 0px 20px -3px rgb(0 0 0 / 40%);
  box-sizing: border-box;
  height: 100%;
  padding: 10px 30px 30px 70px;
  position: relative;
  text-align: left;
  width: 100%;
}
.top .portfolio {
  height: 60%;
  top: -10px;
  /* width: calc(100% - 30px);
    left: 15px; */
}
.right .portfolio,
.left .portfolio {
  height: 60%;
  padding-top: 40px;
}
.right .portfolio {
  padding-left: 85px;
}

.portfolio .card {
  margin-left: -25px;
  position: relative;
}

.portfolio .card.wallet {
  top: -10px;
  position: relative;
  z-index: 0;
}

.player .show-round2,
.player .show-round3,
.over-content .show-round2,
.over-content .show-round3 {
  display: none !important;
}
.player.round2 .show-round2,
.round2 .over-content .show-round2 {
  display: inline-block !important;
}
.player.round2 .show-round1,
.round2 .over-content .show-round1 {
  display: none !important;
}
.player.round2.round3 .show-round2,
.round2.round3 .over-content .show-round2 {
  display: inline-block !important;
}
.player.round3 .show-round3,
.round3 .over-content .show-round3 {
  display: inline-block !important;
}

.portfolio .row.ronwallet {
  max-height: 0;
  overflow: hidden;
  opacity: 0;
  padding: 10px 0 0 25px;
  margin: -10px 0 0 -25px;
}
.portfolio .row.ronwallet.show {
  max-height: 100px;
  opacity: 1;
  transition: max-height 0.6s 0s ease-out, opacity 0.3s 0.3s ease-out;
}

.portfolio .select {
  padding-left: 15px;
}
.portfolio .select .card {
  margin-left: -40px;
}
.portfolio .select .card.wallet {
  top: -10px;
  position: relative;
  z-index: -1;
}
.portfolio .select .cardholder {
  background-color: rgba(238, 238, 238, 0.6);
  border-radius: 8%;
  display: inline-block;
  padding-left: 50px;
  margin-left: 5px;
}
.portfolio .select.confirmed .cardholder {
  background-color: transparent;
}
.portfolio .select .cardholder .card {
  display: block;
  margin-left: -50px;
  opacity: 0;
}
.portfolio .select.selected .cardholder .card {
  opacity: 1;
  transition: all 0.2s 0s ease-out;
}
.portfolio .select.confirmed .cardholder .card {
  margin-left: -90px;
  transition: all 0.2s 0s ease-out;
}

.portfolio .row {
  display: block;
  margin: 10px auto;
  position: relative;
}

.playing.bottom .off-turn {
  z-index: -1;
}

.notifications {
  background-color: #9e93ff;
  border-radius: 15px;
  box-shadow: 0px 0px 20px -3px rgb(0 0 0 / 80%);
  display: inline-block;
  opacity: 0;
  padding: 0;
  max-width: 0;
  transition: all 0.02s 0s ease-in;
  white-space: nowrap;
  margin-bottom: 10px;
  margin-left: -4px;
}

.show.notifications {
  max-width: 100vw;
  opacity: 1;
  padding: 3px 10px 4px;
  transition: all 0.1s 0s ease-out;
}

.bottom.playing .notification-container {
  min-height: 41px;
  position: relative;
  top: -10px;
}

.button {
  background-color: #eee;
  border-radius: 8px;
  box-shadow: 0px 0px 20px -3px rgb(0 0 0 / 80%);
  display: inline-block;
  font-size: 15px;
  font-weight: bold;
  opacity: 0;
  padding: 0;
  letter-spacing: -0.2px;
  max-width: 0;
  text-transform: uppercase;
  transition: all 0.02s 0s ease-in;
  white-space: nowrap;
  margin: 5px auto 10px;
}
.show.button {
  max-width: 100vw;
  opacity: 1;
  padding: 8px 15px 9px;
  transition: all 0.1s 0s ease-out;
  position: relative;
  z-index: 2;
}

/* OVERLAY */

.overlay {
  background-color: rgba(125, 111, 255, 0.59);
  background-color: rgba(255, 255, 255, 0.6);
  background-color: rgba(155, 155, 155, 0.6);
  backdrop-filter: blur(10px);
  display: none;
  height: 100vh;
  left: 0;
  opacity: 0;
  position: fixed;
  top: 0;
  transition: all 0.1s 0s ease-out;
  width: 100vw;
  z-index: 5;
}

.overlay.show {
  opacity: 1;
  transition: all 0.3s 0s ease-in;
}

.overlay aside {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.over-nowplaying,
.over-nowtifications,
.over-content {
  margin: 20px;
  padding: 10px;
}
.over-nowviewing {
  margin: -20px 20px 20px;
  padding: 10px;
}
.over-nowplaying,
.over-nowtifications,
.over-nowviewing {
  border-bottom: solid 1px #000;
}

.over-content {
  flex: 1 1 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 30px;
}

.over-nowplaying,
.over-nowviewing {
  text-align: left;
}
.round2 .over-nowplaying {
  padding-bottom: 15px;
}

.over-nowplaying .pic {
  border-radius: 50%;
  vertical-align: middle;
}

.round1 .step1 .over-notifications {
  height: 110px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 20px 0 10px;
  box-sizing: border-box;
}

.round2 .step1 .over-notifications {
  height: 70px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}

.over-select .cardholder {
  background-color: rgba(238, 238, 238, 0.6);
  border-radius: 8%;
  display: inline-block;
  margin: 5px;
}
.over-select .cardholder .card {
  display: block;
  opacity: 0;
}

.overlay .portfolio {
  background-color: transparent;
  box-shadow: none;
  display: block;
  text-align: left;
  margin: 20px 0;
}

.over-nowplaying .portfolio-viewer {
  position: relative;
  top: -15px;
  float: right;
  margin-bottom: -15px;
}

.over-nowplaying .dropdown {
  background-color: rgba(238, 238, 238, 0.8);
  backdrop-filter: blur(10px);
  border-radius: 8px;
  box-shadow: 0px 0px 20px -3px rgb(0 0 0 / 80%);
  box-sizing: border-box;
  max-height: 0;
  margin-top: -7px;
  padding: 2px 7px;
  position: absolute;
  opacity: 0;
  width: 100%;
  transition: all 0.02s 0s ease-out;
}
.over-nowplaying .dropdown.show {
  max-height: 200px;
  opacity: 1;
  transition: all 0.3s 0s ease-in;
}

.over-nowplaying .dropdown-button {
  display: block;
  padding: 5px;
  border-top: solid 1px #000;
}
.over-nowplaying .dropdown-button:first-child {
  border-top: none;
}
</style>
