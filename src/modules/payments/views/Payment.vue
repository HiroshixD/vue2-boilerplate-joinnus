
<script type="text/javascript" src="../components/payments-api.component.js"></script>


<template>

	<div class="principal" v-show="body"> 
		<div class="container-fluid">
			<div class="row">
				<div class="col l12 s12 header">
					<div class="col l3 s6"  style="height: 80px">
						<div class="return hide-on-small-only">
							<label>
								<i class="fa fa-angle-left" aria-hidden="true"></i>       REGRESAR AL EVENTO
							</label> 
						</div>
						<div class="return-resp show-on-small hide-on-med-and-up">
							<label>
								<i class="fa fa-angle-left" aria-hidden="true"></i> REGRESAR
							</label> 
						</div>                         
					</div>
					<div class="col l3 s6 offset-l6 hide-on-small-only loguito">
						<img id="logo" src="../../../assets/images/logo.png">
					</div> 

					<!-- Responsive Timer -->
					<div class="col l3 s6 offset-l6 show-on-small hide-on-med-and-up">
						<div class="timer-resp">
							<label id="timer">14:58</label>
							<span class="time-min">min.</span>
							<span class="submessageresp">¡Tienes tiempo de sobra!</span>
						</div>
					</div>                 
					<!-- End Responsive Timer -->
				</div> 
				<div class="col l12 s12">
					<div class="col l8 s12" style="height: 530px;">
						<!--div class="col s6 show-on-medium-and-down hide-on-large-only"  style="background-color: blue; height: 50px">Imagen
						</div>
						<div class="col s6 show-on-medium-and-down hide-on-large-only"  style="background-color: brown; height: 50px">Otro texto
						</div-->
						<div class="col l4 s6" style="height: 100px">
							<div class="imagecontainer">
								<img src="../../../assets/images/party.png">
							</div>
						</div>
						<div class="col l8 s6" style="height: 100px" v-if="data.name">
							<div class="title">
								{{ data.name }}
							</div>
							<div class="details">
								<i class="material-icons" style="font-size: 15.5px;">perm_contact_calendar</i> Miércoles 18 de noviembre a las 18:00
							</div>

							<div class="address" v-if="data.locales.address">
								<i class="material-icons" style="font-size: 15.5px;"> location_on</i>
							{{ data.locales.address }}
							</div>
						</div>

						<div class="col l12 s12">
							<div class="col l11 offset-l1 s12 payment-container">
								<ul class="collapsible" data-collapsible="accordion">
									<li>
										<div class="collapsible-header payments"><i class="material-icons">verified_user</i>Elige tu método de pago
										</div>
										<div class="collapsible-body">

											<div class="section" id="payu" v-show="payments.payu">
												<div class="row">
													<div class="col l12">
														<div class="col l3 imgpayment">
															<img src="../../../assets/images/pc-tarjeta.png">
														</div>
														<div class="col l5 info">
															<h5 class="typepayment_card">Paga con tarjeta de crédito o debito</h5>
															<h6 class="paymentadvice">¡El cobro se realizará en dólares!</h6>
														</div>
														<div class="col l4">
															<div class="paymentbutton">
																<a class="waves-effect waves-light btn paymentbutton" id="stripeButton">Pagar</a> 
															</div>
														</div>
													</div>
												</div>
											</div>

											<div class="divider"></div>

											<div class="section" id="pagoefectivo" v-show="payments.pago_efectivo">
												<div class="row">
													<div class="col l12">
														<div class="col l3 imgpayment">
															<img src="../../../assets/images/dollar.png">
														</div>
														<div class="col l5 info">
															<h5 class="typepayment_card">Depósito en efectivo</h5>
														</div>
														<div class="col l4">
															<div class="paybutton">
																<a class="waves-effect waves-light btn hide-on-med-and-down paymentbutton">Pagar</a>
																<a class="waves-effect waves-light btn show-on-small hide-on-med-and-up efectivebutton_small">
																Solicitar código</a>                        
															</div>
														</div>
													</div>
												</div>
											</div>

											<div class="divider"></div>

											<div class="section" id="stripe" v-show="payments.stripe">
												<div class="row">
													<div class="col l12">
														<div class="col l3 imgpayment">
															<img src="../../../assets/images/tubanco.png">
														</div>
														<div class="col l5 info">
															<h5 class="typepayment_card">Paga en tu banca por internet</h5>
														</div>
														<div class="col l4">
															<div class="paybutton">
																<a class="waves-effect waves-light btn hide-on-med-and-down paymentbutton" id="stripePay">Pagar</a>
																<a v-on:click="payStripe()" class="waves-effect waves-light btn show-on-small hide-on-med-and-up otherbutton_small">
																Solicitar código</a> 
															</div>
														</div>
													</div>
												</div>
											</div>

										</div>
									</li>
								</ul>
							</div>
						</div>
					</div>

					<div class="col l4 s12"> <!-- Detalle de pago contenedor grande -->
						<div class="col l12 hide-on-med-and-down" style="height: 100px">
							<div class="col l8 offset-l4">
								<div class="timer">
									14:58
									<span class="min">min.</span>
								</div>
								<div class="submessage">
									¡Tienes tiempo de sobra !
								</div>
							</div>
							<div class="col l12">
								<div class="detailpayment" style="">
									<div class="col l12" id="titlepay">
										Resumen de Compra
									</div>
									<div class="col l12 items">
										<div class="qtyticket col l2">
											2 X 
										</div>
										<div class="typeticket col l5">
											Entrada General
										</div>
										<div class="amountticket col l5">
											PEN. 999000
										</div>                                        
									</div>
									<div class="col l12 items">
										<div class="qtyticket col l2">
											1 X 
										</div>
										<div class="typeticket col l5">
											Entrada General
										</div>
										<div class="amountticket col l5">
											S/. 60.00
										</div>                                        
									</div>  
									<div class="col l12">
										<div class="col l9 offset-l3">
											<div class="discount">
												Dcto. S/. 0.00                                                
											</div>
										</div>                                        
									</div>

									<div class="col l12">
										<div class="col l6 totalqty">
											Total
										</div>   
										<div class="col l6 totalprice">
											S/. {{ total/100 }}.00
										</div>
									</div>                                                                                    
								</div>
							</div>
						</div>                       
					</div>
				</div>
			</div>
		</div>
		<div class="progress loader">
			<div class="determinate" style="width: 70%"></div>
		</div> 

		<!-- Modal Structure -->
		<div id="modalStripe" class="modal stripe">
			<div class="modal-content">
				<div class="headerModal">
					<div class="imgmodal">
						<img class="animated zoomInUp" src="../../../assets/images/logo-square.png">
					</div>
					<div class="providerName">
						Joinnus !
					</div>
					<div class="qtyamount">
						1 entrada(s) (S/. {{total/100}}.00) 
					</div>
					<div class="contactmail">
						hpalacios@disolu.com
					</div>
				</div>

				<div class="modalPrincipal">
					<div class="row">
						<form class="col s12">
							<div class="row" style="padding-top: 3%">
								<div class="input-field col s12">
									<i class="material-icons prefix">credit_card</i>
									<input id="credit_card" type="text" class="validate" v-model=payuparameters.credit_card>
									<label for="icon_prefix">Número de tarjeta</label>
								</div>
								<div class="input-field col s6">
									<i class="material-icons prefix">perm_contact_calendar</i>
									<input id="due_date" type="tel" class="validate" v-model="payuparameters.due_date">
									<label for="icon_telephone">MM/YY</label>
								</div>
								<div class="input-field col s6">
									<i class="material-icons prefix">lock</i>
									<input id="cvv" type="tel" class="validate" v-model="payuparameters.cvv">
									<label for="icon_telephone">CVV</label>
								</div>        
							</div>
						</form>
					</div>
				</div>
			</div>
			<div class="modal-footer buttonpay">
				<a v-on:click="sendPayuRequest()" class="modal-action modal-close waves-effect waves-green btn-flat">Pagar Ahora S/. {{total/100}}.00</a>
			</div>
		</div>

	</div>

</template>
