function transformAuth(createOrder, orderDetails ){
    const transformedAuth = {
        amount: createOrder?.payments[0].attributes?.paymentRequests[0].amount, // Order Events also
        audit: {
          source: createOrder?.payments[0].attributes?.orderSource,
          traceId: null,
        },
        authorizationAmount: createOrder?.payments[0]?.authAmount, 
        channel: createOrder?.channelId,// Order events also
        currencyCode: createOrder?.currency, //Order events also
        customerId: createOrder?.customer?.userId, //Order events also
        locale: null,
        orderId: orderDetails?.orderId,
        orderNumber: createOrder?.orderNumber,
        paymentId: createOrder?.payments[0].attributes?.paymentRequests[0].paymentId,
        paymentType: createOrder?.payments[0].paymentType,
        siteId: null,
        transactionId: createOrder?.payments[0].attributes?.paymentRequests[0].transactionId,
        billingDetails: {
          firstName: createOrder?.payments[0].billToAddress?.name?.first,
          lastName: createOrder?.payments[0].billToAddress?.name?.last,
          email: createOrder?.payments[0].billToAddress?.email,
          addressLine1: createOrder?.payments[0]?.billToAddress?.address1,
          addressLine2: createOrder?.payments[0]?.billToAddress?.address2,
          city: createOrder?.payments[0]?.billToAddress?.city,
          state: createOrder?.payments[0]?.billToAddress?.state,
          country: createOrder?.payments[0]?.billToAddress?.country,
          zip: createOrder?.payments[0]?.billToAddress?.postalCode,
          phone: createOrder?.payments[0]?.billToAddress?.phone?.number,
        },
        attributes: {
          _comment: createOrder?.payments[0].attributes?._comment,
          amazonOrderReferenceId: createOrder?.payments[0].attributes?.amazonOrderReferenceId,
          authorizationCurrencyCode: createOrder?.payments[0].attributes?.authorizationCurrencyCode,
          authorizationReferenceId: createOrder?.payments[0].attributes?.authorizationReferenceId,
          captureNow: createOrder?.payments[0].attributes?.captureNow,
          sellerAuthorizationNote: createOrder?.payments[0].attributes?.sellerAuthorizationNote,
          softDescriptor: createOrder?.payments[0].attributes?.softDescriptor,
          transactionTimeout: createOrder?.payments[0].attributes?.transactionTimeout,
          _comment1: createOrder?.payments[0].attributes?._comment1,
          accountNumber: createOrder?.payments[0].attributes?.accountNumber,
          cardType: createOrder?.payments[0].attributes?.cardType,
          checkoutId: createOrder?.payments[0].attributes?.checkoutId,
          expirationDate: createOrder?.payments[0].attributes?.expirationDate,
          omniToken: createOrder?.payments[0]?.attributes?.omniToken,
          orderSource: createOrder?.payments[0].attributes?.orderSource,
          payPageRegId: createOrder?.payments[0].attributes?.payPageRegId,
          _comment2: createOrder?.payments[0].attributes?._comment2,
          paymentRequests: [
            {
              transactionId: createOrder?.payments[0].attributes?.paymentRequests[0].transactionId,
              paymentId: createOrder?.payments[0].attributes?.paymentRequests[0].paymentId,
              gatewaySettings: {
                paymentMethodTypes: createOrder?.payments[0].attributes?.paymentRequests[0].gatewaySettings.paymentMethodTypes,
              },
              cardDetails: {
                giftCardNumber:  createOrder?.payments[0].attributes?.paymentRequests[0].cardDetails.giftCardNumber,
                giftCardPin: createOrder?.payments[0].attributes?.paymentRequests[0].cardDetails.giftCardPin,
              },
              amount: createOrder?.payments[0].attributes?.paymentRequests[0].amount,// Order events also
              transactionTimestamp: createOrder?.payments[0].attributes?.paymentRequests[0].transactionTimestamp,
              paymentMethod: createOrder?.payments[0].attributes?.paymentRequests[0].paymentMethod,
              gatewayId: createOrder?.payments[0].attributes?.paymentRequests[0].gatewayId,
            },
          ],
          _comment3: createOrder?.payments[0].attributes?._comment3,
          token: createOrder?.payments[0].attributes?.token, 
        },
      }
    return transformedAuth;
}

function transformCapture(createOrder, orderDetails){
    const transformedCapture = {
        amount: createOrder?.payments[0].attributes?.paymentRequests[0].amount, // Order Events also
        audit: {
          source: createOrder?.payments[0].attributes?.orderSource,
          traceId: null,
        },
        channel: createOrder?.channelId,// Order events also
        currencyCode: createOrder?.currency, //Order events also
        customerId: createOrder?.customer?.userId, //Order events also
        locale: null,
        orderId: orderDetails?.orderId,
        orderNumber: createOrder?.orderNumber,
        partialCapture: null,
        paymentType: createOrder?.payments[0].paymentType,
        paymentMethod: createOrder?.payments[0]?.paymentMethod,
        siteId: null,
        settlementId: null,
        transactionId: createOrder?.payments[0].attributes?.paymentRequests[0].transactionId,
        attributes: {
          _comment: createOrder?.payments[0].attributes?._comment,
          amazonAuthorizationId: createOrder?.payments[0].attributes?.amazonAuthorizationId,
          amazonOrderReferenceId: createOrder?.payments[0].attributes?.amazonOrderReferenceId,
          authorizationReferenceId: createOrder?.payments[0].attributes?.authorizationReferenceId,
          authorizedAmount: createOrder?.payments[0].attributes?.authorizedAmount,
          captureAmount: createOrder?.payments[0].attributes?.captureAmount,
          captureCurrencyCode: createOrder?.payments[0].attributes?.captureCurrencyCode,
          captureReferenceId: createOrder?.payments[0].attributes?.captureReferenceId,
          sellerAuthorizationNote: createOrder?.payments[0].attributes?.sellerAuthorizationNote,
          sellerCaptureNote: createOrder?.payments[0].attributes?.sellerCaptureNote,
          softDescriptor: createOrder?.payments[0].attributes?.softDescriptor,
          transactionTimeout: createOrder?.payments[0].attributes?.transactionTimeout,
          _comment2: createOrder?.payments[0].attributes?._comment2,
          paymentRequests: [
            {
              transactionId: createOrder?.payments[0].attributes?.paymentRequests[0].transactionId,
              paymentId: createOrder?.payments[0].attributes?.paymentRequests[0].paymentId,
              customProperties: {
                invoiceNumber: createOrder?.payments[0].attributes?.paymentRequests[0].customProperties.invoiceNumber,
                authCode: createOrder?.payments[0].attributes?.paymentRequests[0].customProperties.authCode,
              },
              gatewaySettings: {
                paymentMethodTypes: createOrder?.payments[0].attributes?.paymentRequests[0].gatewaySettings.paymentMethodTypes,
              },
              cardDetails: {
                giftCardNumber: createOrder?.payments[0].attributes?.paymentRequests[0].cardDetails.giftCardNumber,
                giftCardPin: createOrder?.payments[0].attributes?.paymentRequests[0].cardDetails.giftCardPin,
              },
              amount: createOrder?.payments[0].attributes?.paymentRequests[0].amount,// Order events also
              transactionTimestamp: createOrder?.payments[0].attributes?.paymentRequests[0].transactionTimestamp,
              paymentMethod: createOrder?.payments[0].attributes?.paymentRequests[0].paymentMethod,
              gatewayId: createOrder?.payments[0].attributes?.paymentRequests[0].gatewayId,
            },
          ],
          _comment3: createOrder?.payments[0].attributes?._comment3,
          afterPayOrderNumber: createOrder?.payments[0].attributes?.afterPayOrderNumber,
        },
      }
    return transformedCapture;
}

function transformVoid(createOrder, orderDetails){
    const transformedVoid = {
        amount: createOrder?.payments[0].attributes?.paymentRequests[0].amount, // Order Events also
        audit: {
          source: createOrder?.payments[0].attributes?.orderSource,
          traceId: null,
        },
        channel: createOrder?.channelId,// Order events also
        currencyCode: createOrder?.currency, //Order events also
        customerId: createOrder?.customer?.userId, //Order events also
        locale: null,
        orderId: orderDetails?.orderId,
        orderNumber: createOrder?.orderNumber,
        orderSource: createOrder?.payments[0].attributes?.orderSource,
        paymentId: createOrder?.payments[0].attributes?.paymentRequests[0].paymentId,
        paymentMethod: createOrder?.payments[0].attributes?.paymentRequests[0].paymentMethod,
        paymentType: createOrder?.payments[0].paymentType,
        siteId: null,
        transactionId: createOrder?.payments[0].attributes?.paymentRequests[0].transactionId,
        transactionTimestamp: createOrder?.payments[0].attributes?.paymentRequests[0].transactionTimestamp,
        attributes: {
          _comment: createOrder?.payments[0].attributes?._comment,
          amazonOrderReferanceId: createOrder?.payments[0].attributes?.amazonOrderReferanceId,
          _comment1: createOrder?.payments[0].attributes?._comment1,
          cnpTxnId: createOrder?.payments[0].attributes?.cnpTxnId,
          _comment2: createOrder?.payments[0].attributes?._comment2,
          paymentRequests: [
            {
              transactionId: createOrder?.payments[0].attributes?.paymentRequests[0].transactionId,
              paymentId: createOrder?.payments[0].attributes?.paymentRequests[0].paymentId,
              gatewaySettings: {
                paymentMethodTypes: createOrder?.payments[0].attributes?.paymentRequests[0].gatewaySettings.paymentMethodTypes,
              },
              cardDetails: {
                giftCardNumber: createOrder?.payments[0].attributes?.paymentRequests[0].cardDetails.giftCardNumber,
                giftCardPin: createOrder?.payments[0].attributes?.paymentRequests[0].cardDetails.giftCardPin,
              },
              amount: createOrder?.payments[0].attributes?.paymentRequests[0].amount,// Order events also
              transactionTimestamp: createOrder?.payments[0].attributes?.paymentRequests[0].transactionTimestamp,
              paymentMethod: createOrder?.payments[0].attributes?.paymentRequests[0].paymentMethod,
              gatewayId: createOrder?.payments[0].attributes?.paymentRequests[0].gatewayId,
            },
          ],
          _comment3: createOrder?.payments[0].attributes?._comment3,
          afterPayOrderNumber: createOrder?.payments[0].attributes?.afterPayOrderNumber,
        },
      }
    return transformedVoid;
}

function transformRefund(createOrder, orderDetails){
    const transformedRefund = {
        amount: createOrder?.payments[0].attributes?.paymentRequests[0].amount, // Order Events also
        audit: {
          source: createOrder?.payments[0].attributes?.orderSource,
          traceId: null,
        },
        channel: createOrder?.channelId,// Order events also
        currencyCode: createOrder?.currency, //Order events also
        customerId: createOrder?.customer?.userId, //Order events also
        existingRefundedAmtforCaptureId: null,
        locale: null,
        orderId: orderDetails?.orderId,
        orderNumber: createOrder?.orderNumber,
        paymentId: createOrder?.payments[0].attributes?.paymentRequests[0].paymentId,
        paymentType: createOrder?.payments[0].paymentType,
        settlementId: null,
        siteId: null,
        transactionId: createOrder?.payments[0].attributes?.paymentRequests[0].transactionId,
        transactionTimestamp: createOrder?.payments[0].attributes?.paymentRequests[0].transactionTimestamp,
        attributes: {
          _comment: createOrder?.payments[0].attributes?._comment,
          amazonCaptureId: createOrder?.payments[0].attributes?.amazonCaptureId,
          invoiceNumber: createOrder?.payments[0].attributes?.invoiceNumber,
          refundAmount: createOrder?.payments[0].attributes?.refundAmount,
          refundCurrencyCode: createOrder?.payments[0].attributes?.refundCurrencyCode,
          refundReferenceId: createOrder?.payments[0].attributes?.refundReferenceId,
          sellerRefundNote: createOrder?.payments[0].attributes?.sellerRefundNote,
          softDescriptor: createOrder?.payments[0].attributes?.softDescriptor,
          _comment2: createOrder?.payments[0].attributes?._comment2,
          paymentRequests: [
            {
              transactionId: createOrder?.payments[0].attributes?.paymentRequests[0].transactionId,
              paymentId: createOrder?.payments[0].attributes?.paymentRequests[0].paymentId,
              invoiceNumber: createOrder?.payments[0].attributes?.invoiceNumber,
              gatewaySettings: {
                paymentMethodTypes: createOrder?.payments[0].attributes?.paymentRequests[0].gatewaySettings.paymentMethodTypes,
              },
              cardDetails: {
                giftCardNumber: createOrder?.payments[0].attributes?.paymentRequests[0].cardDetails.giftCardNumber,
              },
              amount: createOrder?.payments[0].attributes?.paymentRequests[0].amount,// Order events also
              transactionTimestamp: createOrder?.payments[0].attributes?.paymentRequests[0].transactionTimestamp,
              paymentMethod: createOrder?.payments[0].attributes?.paymentRequests[0].paymentMethod,
              gatewayId: createOrder?.payments[0].attributes?.paymentRequests[0].gatewayId,
            },
          ],
          _comment3: createOrder?.payments[0].attributes?._comment3,
          afterPayOrderNumber: createOrder?.payments[0].attributes?.afterPayOrderNumber,
        },
      }
    return transformedRefund;
}

module.exports = {
    transformAuth,
    transformCapture,
    transformVoid,
    transformRefund
}