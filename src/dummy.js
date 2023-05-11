setTimeout(() => {
    dispatch(messageHide())
   }, config.message.error.timers.long)
origin: parse-community/parse-server
spec/MongoTransform.spec.js/it
it('untransforms mongodb number types', done => {
  const input = {
   long: mongodb.Long.fromNumber(Number.MAX_SAFE_INTEGER),
   double: new mongodb.Double(Number.MAX_VALUE),
  };
  const output = transform.mongoObjectToParseObject(null, input, {
   fields: {
    long: { type: 'Number' },
    double: { type: 'Number' },
   },
  });
  expect(output.long).toBe(Number.MAX_SAFE_INTEGER);
  expect(output.double).toBe(Number.MAX_VALUE);
  done();
 });
origin: atulmy/crate
src/modules/subscription/Item/index.js/dispatch.then.catch.then
dispatch(remove({ id: subscription.id }))
   .then(response => {
    if (response.data.errors && response.data.errors.length > 0) {
     dispatch(messageShow(response.data.errors[0].message))

     this.loading(false)
    } else {
     dispatch(messageShow('Unsubscribed successfully.'))

     onSuccessUnsubscribe()
    }
   })
   .catch(() => {
    dispatch(messageShow('There was some error unsubscribing. Please try again.'))

    this.loading(false)
   })
   .then(() => {
    setTimeout(() => {
     dispatch(messageHide())
    }, config.message.error.timers.long)
   })
origin: strapi/strapi
packages/strapi-admin/admin/src/containers/MarketplacePage/PluginCard/index.js/PluginCard/render
  this.props.plugin.id === 'support-us' ? (
   <FormattedMessage
    id={this.props.plugin.description.long || this.props.plugin.description.short}
   />
  ) : (
   this.props.plugin.description.long || this.props.plugin.description.short
  ),
};
    </div>
   </div>
   <div className="cardDescription">{descriptions.long}</div>
   <div className="cardFooter" onClick={e => e.stopPropagation()}>
    <div className="cardFooterButton">
origin: atulmy/crate
src/modules/crate/Item/index.js/dispatch.then.catch.then
dispatch(createSubscription({crateId: crate.id}))
    .then(response => {
     this.#loading(false)
     
     if (response.data.errors && response.data.errors.length > 0) {
      dispatch(messageShow(response.data.errors[0].message))

     } else {
      dispatch(messageShow('Subscribed successfully.'))

      onSuccessSubscription()
     }
    })
    .catch(() => {
     dispatch(messageShow('There was some error subscribing to this crate. Please try again.'))

     this.#loading(false)
    })
    .then(() => {
     setTimeout(() => {
      dispatch(messageHide())
     }, config.message.error.timers.long)
    })
origin: codedawi/covid19-bagdes
src/routes.js/router.get
router.get(
  ["/recovered", "/recovered/latest"],
  
  async (req, res) => {

    const { recovered } = await services.getLatestGlobally();

    const label = req.query.long ? "COVID-19 Recovered" : "recovered";

    res.send(getBadge(label, "green", recovered));
  
});
origin: cmake-js/fastcall
test/suites/refTypes.js/it
it('could be created from StructType', function () {
      const TNumbers = new StructType({
        a: 'short',
        b: 'int64',
        c: ref.types.long
      });
      const result = lib.struct({ TNumbers });

      assert.equal(result, lib);
      testStructInterface();
    });
origin: atulmy/crate
src/modules/user/Login/index.js/setTimeout
setTimeout(() => {
     dispatch(messageHide())
    }, config.message.error.timers.long)



setTimeout(() => {
    dispatch(messageHide())
   }, config.message.error.timers.long)
origin: parse-community/parse-server
spec/MongoTransform.spec.js/it
it('untransforms mongodb number types', done => {
  const input = {
   long: mongodb.Long.fromNumber(Number.MAX_SAFE_INTEGER),
   double: new mongodb.Double(Number.MAX_VALUE),
  };
  const output = transform.mongoObjectToParseObject(null, input, {
   fields: {
    long: { type: 'Number' },
    double: { type: 'Number' },
   },
  });
  expect(output.long).toBe(Number.MAX_SAFE_INTEGER);
  expect(output.double).toBe(Number.MAX_VALUE);
  done();
 });
origin: atulmy/crate
src/modules/subscription/Item/index.js/dispatch.then.catch.then
dispatch(remove({ id: subscription.id }))
   .then(response => {
    if (response.data.errors && response.data.errors.length > 0) {
     dispatch(messageShow(response.data.errors[0].message))

     this.loading(false)
    } else {
     dispatch(messageShow('Unsubscribed successfully.'))

     onSuccessUnsubscribe()
    }
   })
   .catch(() => {
    dispatch(messageShow('There was some error unsubscribing. Please try again.'))

    this.loading(false)
   })
   .then(() => {
    setTimeout(() => {
     dispatch(messageHide())
    }, config.message.error.timers.long)
   })
origin: strapi/strapi
packages/strapi-admin/admin/src/containers/MarketplacePage/PluginCard/index.js/PluginCard/render
  this.props.plugin.id === 'support-us' ? (
   <FormattedMessage
    id={this.props.plugin.description.long || this.props.plugin.description.short}
   />
  ) : (
   this.props.plugin.description.long || this.props.plugin.description.short
  ),
};
    </div>
   </div>
   <div className="cardDescription">{descriptions.long}</div>
   <div className="cardFooter" onClick={e => e.stopPropagation()}>
    <div className="cardFooterButton">
origin: atulmy/crate
src/modules/crate/Item/index.js/dispatch.then.catch.then
dispatch(createSubscription({crateId: crate.id}))
    .then(response => {
     this.#loading(false)
     
     if (response.data.errors && response.data.errors.length > 0) {
      dispatch(messageShow(response.data.errors[0].message))

     } else {
      dispatch(messageShow('Subscribed successfully.'))

      onSuccessSubscription()
     }
    })
    .catch(() => {
     dispatch(messageShow('There was some error subscribing to this crate. Please try again.'))

     this.#loading(false)
    })
    .then(() => {
     setTimeout(() => {
      dispatch(messageHide())
     }, config.message.error.timers.long)
    })
origin: codedawi/covid19-bagdes
src/routes.js/router.get
router.get(
  ["/recovered", "/recovered/latest"],
  
  async (req, res) => {

    const { recovered } = await services.getLatestGlobally();

    const label = req.query.long ? "COVID-19 Recovered" : "recovered";

    res.send(getBadge(label, "green", recovered));
  
});
origin: cmake-js/fastcall
test/suites/refTypes.js/it
it('could be created from StructType', function () {
      const TNumbers = new StructType({
        a: 'short',
        b: 'int64',
        c: ref.types.long
      });
      const result = lib.struct({ TNumbers });

      assert.equal(result, lib);
      testStructInterface();
    });
origin: atulmy/crate
src/modules/user/Login/index.js/setTimeout
setTimeout(() => {
     dispatch(messageHide())
    }, config.message.error.timers.long)
setTimeout(() => {
    dispatch(messageHide())
   }, config.message.error.timers.long)
origin: parse-community/parse-server
spec/MongoTransform.spec.js/it
it('untransforms mongodb number types', done => {
  const input = {
   long: mongodb.Long.fromNumber(Number.MAX_SAFE_INTEGER),
   double: new mongodb.Double(Number.MAX_VALUE),
  };
  const output = transform.mongoObjectToParseObject(null, input, {
   fields: {
    long: { type: 'Number' },
    double: { type: 'Number' },
   },
  });
  expect(output.long).toBe(Number.MAX_SAFE_INTEGER);
  expect(output.double).toBe(Number.MAX_VALUE);
  done();
 });
origin: atulmy/crate
src/modules/subscription/Item/index.js/dispatch.then.catch.then
dispatch(remove({ id: subscription.id }))
   .then(response => {
    if (response.data.errors && response.data.errors.length > 0) {
     dispatch(messageShow(response.data.errors[0].message))

     this.loading(false)
    } else {
     dispatch(messageShow('Unsubscribed successfully.'))

     onSuccessUnsubscribe()
    }
   })
   .catch(() => {
    dispatch(messageShow('There was some error unsubscribing. Please try again.'))

    this.loading(false)
   })
   .then(() => {
    setTimeout(() => {
     dispatch(messageHide())
    }, config.message.error.timers.long)
   })
origin: strapi/strapi
packages/strapi-admin/admin/src/containers/MarketplacePage/PluginCard/index.js/PluginCard/render
  this.props.plugin.id === 'support-us' ? (
   <FormattedMessage
    id={this.props.plugin.description.long || this.props.plugin.description.short}
   />
  ) : (
   this.props.plugin.description.long || this.props.plugin.description.short
  ),
};
    </div>
   </div>
   <div className="cardDescription">{descriptions.long}</div>
   <div className="cardFooter" onClick={e => e.stopPropagation()}>
    <div className="cardFooterButton">
origin: atulmy/crate
src/modules/crate/Item/index.js/dispatch.then.catch.then
dispatch(createSubscription({crateId: crate.id}))
    .then(response => {
     this.#loading(false)
     
     if (response.data.errors && response.data.errors.length > 0) {
      dispatch(messageShow(response.data.errors[0].message))

     } else {
      dispatch(messageShow('Subscribed successfully.'))

      onSuccessSubscription()
     }
    })
    .catch(() => {
     dispatch(messageShow('There was some error subscribing to this crate. Please try again.'))

     this.#loading(false)
    })
    .then(() => {
     setTimeout(() => {
      dispatch(messageHide())
     }, config.message.error.timers.long)
    })
origin: codedawi/covid19-bagdes
src/routes.js/router.get
router.get(
  ["/recovered", "/recovered/latest"],
  
  async (req, res) => {

    const { recovered } = await services.getLatestGlobally();

    const label = req.query.long ? "COVID-19 Recovered" : "recovered";

    res.send(getBadge(label, "green", recovered));
  
});
origin: cmake-js/fastcall
test/suites/refTypes.js/it
it('could be created from StructType', function () {
      const TNumbers = new StructType({
        a: 'short',
        b: 'int64',
        c: ref.types.long
      });
      const result = lib.struct({ TNumbers });

      assert.equal(result, lib);
      testStructInterface();
    });
origin: atulmy/crate
src/modules/user/Login/index.js/setTimeout
setTimeout(() => {
     dispatch(messageHide())
    }, config.message.error.timers.long)
