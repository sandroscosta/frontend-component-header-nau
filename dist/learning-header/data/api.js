function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

import { getConfig } from '@edx/frontend-platform';
import { getAuthenticatedHttpClient } from '@edx/frontend-platform/auth';

var getCourseLogoOrg = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var orgId, _yield$getAuthenticat, data, _ref2, httpErrorStatus;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            orgId = window.location.pathname.match(/course-(.*?):([^+]+)/)[2];
            _context.next = 4;
            return getAuthenticatedHttpClient().get("".concat(getConfig().LMS_BASE_URL, "/api/organizations/v0/organizations/").concat(orgId, "/"), {
              useCache: true
            });

          case 4:
            _yield$getAuthenticat = _context.sent;
            data = _yield$getAuthenticat.data;
            return _context.abrupt("return", data.logo);

          case 9:
            _context.prev = 9;
            _context.t0 = _context["catch"](0);
            _ref2 = _context.t0 && _context.t0.customAttributes, httpErrorStatus = _ref2.httpErrorStatus;

            if (!(httpErrorStatus === 404)) {
              _context.next = 14;
              break;
            }

            return _context.abrupt("return", null);

          case 14:
            throw _context.t0;

          case 15:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 9]]);
  }));

  return function getCourseLogoOrg() {
    return _ref.apply(this, arguments);
  };
}();

export default getCourseLogoOrg;
//# sourceMappingURL=api.js.map